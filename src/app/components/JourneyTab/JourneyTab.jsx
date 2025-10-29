"use client";
import "./JourneyTab.css";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import BrandStory from "../BrandStory";
import WebDesignIntake from "../WebDesignIntake";
import BookingModal from "../BookingModal";
import ContractAgreement from "../ContractAgreement";
import Payment from "../Payment";
import { fetchBrandStoryData } from "@/app/utils/supabaseHelpers";
const JourneyTab = () => {
  const [fullName, setFullName] = useState(null);
  const [brandStage, setBrandStage] = useState(null);
  const [userId, setUserId] = useState(null); // ← ADD THIS
  



  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.user) {
        console.error("Session error:", sessionError);
        return;
      }

      const authUserId = session.user.id;
      setUserId(authUserId); // ← SET IT HERE

      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("full_name, brand_stage")
        .eq("id", authUserId)
        .single();

      if (userError) {
        console.error("User fetch error:", userError);
      } else {
        console.log("Fetched userData:", userData);
        setFullName(userData?.full_name);
        setBrandStage(Number(userData?.brand_stage));
      }


    };



    fetchUserData();
  }, []);
  const handleAdvanceStage = async () => {
      const { error } = await supabase
        .from("users")
        .update({ brand_stage: 4 })
        .eq("id", userId);

      if (error) {
        console.error("Failed to update brand_stage to 4:", error);
        alert("There was a problem updating your progress. Please try again.");
      } else {
        alert("Thanks! You've successfully moved to the next step.");
        // Optionally trigger a UI refresh or redirect
      }
    };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {fullName
          ? `Welcome, ${fullName} — Client Onboarding Journey`
          : "Client Onboarding Journey"}
      </h2>

      {brandStage === null && (
        <p className="text-gray-600">Loading your journey...</p>
      )}

      {brandStage === 1 && userId && <BrandStory userId={userId} />}

      {brandStage === 2 && userId && <WebDesignIntake userId={userId} />}
      {brandStage === 3 && userId && (
  <>
    <BookingModal />
    <button onClick={handleAdvanceStage} className="btn btn-primary mt-4">
      Ive booked my call !!
    </button>
  </>
)}
{brandStage === 4 && userId && <ContractAgreement userId={userId} />}
{brandStage === 5 && userId && <Payment userId={userId} />}

      {brandStage > 5 && (
        <p className="text-gray-600">
          You're past Step 5. More steps coming soon!
        </p>
      )}
    </div>
  );

};

export default JourneyTab;
