"use client";
import './Questionaire.css';
import { useState } from "react";

export default function Questionnaire() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    protectHome: "",
    financialProtection: "",
    protectedPeople: [],
    concerns: [],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Generic handler for text/radio inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for checkbox groups
  const handleCheckbox = (group, value) => {
    setFormData((prev) => {
      const exists = prev[group].includes(value);
      return {
        ...prev,
        [group]: exists
          ? prev[group].filter((v) => v !== value)
          : [...prev[group], value],
      };
    });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData ),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (data.success) {
        setMessage(" Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          protectHome: "",
          financialProtection: "",
          protectedPeople: [],
          concerns: [],
        });
      } else {
        setMessage(" Error submitting form: " + data.error);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setMessage(" Submission failed, check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h2 id="questionnaire" className="text-3xl font-bold mb-8 text-center">
        Let’s Get You Protected
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name + Phone */}
        <div className="grid grid-cols-1  ">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="input"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="input"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="input"
            onChange={handleChange}
            value={formData.phone}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        {/* Protect Home */}
       <div>
  <p className="font-semibold mb-3">
  Would you like to explore protection options for your home?
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:-ml-2">
    {["Yes", "No"].map((option) => (
      <label
        key={option}
        className={`flex items-center justify-between px-5 py-4 border rounded-xl cursor-pointer transition
        ${
          formData.protectHome === option
            ? "border-black bg-black text-white"
            : "border-gray-200 bg-gray-50 hover:bg-gray-100"
        }`}
      >
        <span className="text-sm font-medium">{option}</span>

        <input
          type="radio"
          name="protectHome"
          value={option}
          onChange={handleChange}
          checked={formData.protectHome === option}
          required
          className="h-5 w-5 accent-black md:ml-2"
        />
      </label>
    ))}
  </div>
</div>
       

        {/* Financial Protection */}
       <p className="font-semibold mb-3">
Would you like to ensure your family is financially protected?
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:-ml-2">
    {["Yes", "No"].map((option) => (
      <label
        key={option}
        className={`flex items-center justify-between px-5 py-4 border rounded-xl cursor-pointer transition
        ${
          formData.financialProtection === option
            ? "border-black bg-black text-white"
            : "border-gray-200 bg-gray-50 hover:bg-gray-100"
        }`}
      >
        <span className="text-sm font-medium">{option}</span>

        <input
          type="radio"
          name="financialProtection"
          value={option}
          onChange={handleChange}
          checked={formData.financialProtection === option}
          required
          className="h-5 w-5 accent-black md:ml-2"
        />
      </label>
    ))}
  </div>

        {/* Who to Protect */}
       <div>
  <p className="font-semibold mb-3">
  Who would you like to ensure is financially protected?
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {["Spouse/Partner", "Children", "Family", "No one", "Not sure yet"].map(
      (option) => (
        <label
          key={option}
          className="flex items-center justify-between px-5 py-4 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
        >
          <span className="text-sm font-medium">{option}</span>

          <input
            type="checkbox"
            checked={formData.protectedPeople.includes(option)}
            onChange={() => handleCheckbox("protectedPeople", option)}
            className="h-5 w-5 accent-black"
          />
        </label>
      )
    )}
  </div>
</div>
        

      {/* Biggest Concerns */}
<div>
  <p className="font-semibold mb-3">
  Which of the following is your primary financial concern?
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      "Family expenses",
      "Paying off debt",
      "Funeral cost",
      "Income replacement",
      "Just exploring options",
    ].map((option) => (
      <label
        key={option}
        className="flex items-center justify-between px-5 py-4 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
      >
        <span className="text-sm font-medium">{option}</span>

        <input
          type="checkbox"
          checked={formData.concerns.includes(option)}
          onChange={() => handleCheckbox("concerns", option)}
          className="h-5 w-5 accent-black"
        />
      </label>
    ))}
  </div>
</div>
        
      <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Continue"}
        </button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </section>
  );
}
