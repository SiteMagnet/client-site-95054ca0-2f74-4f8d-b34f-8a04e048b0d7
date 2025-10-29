"use client";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import JourneyTab from "../components/JourneyTab";
import AnalyticsTab from "../components/AnalyticsTab";
import BillingTab from "../components/BillingTab";
import ConnectTab from "../components/ConnectTab";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // 🔐 Redirect if not logged in
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/Login");
      }
    };

    checkUser();
  }, [router]);

  const renderTab = () => {
    switch (activeTab) {
      case "journey":
        return <JourneyTab />;
      case "analytics":
        return <AnalyticsTab />;
      case "billing":
        return <BillingTab />;
      case "connect":
        return <ConnectTab />;
      default:
        return <JourneyTab />;
    }
  };

  return (
    <div className="dashboard">
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <nav>
          <ul className="sidebar-list">
            <li className="sidebar-logo">
              <Link href="/">SiteMagnet</Link>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("journey")}
                className={activeTab === "journey" ? "active" : ""}
              >
                Client Pathway
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("analytics")}
                className={activeTab === "analytics" ? "active" : ""}
              >
                Analytics
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("billing")}
                className={activeTab === "billing" ? "active" : ""}
              >
                Billing
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("connect")}
                className={activeTab === "connect" ? "active" : ""}
              >
                Connect
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Close" : "Open"} Sidebar
      </button>

      <main className="dashboard-content">{renderTab()}</main>
    </div>
  );
};

export default Dashboard;
