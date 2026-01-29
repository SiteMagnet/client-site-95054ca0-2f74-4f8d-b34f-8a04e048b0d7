"use client";
import './Questionaire.css';
import { useState } from "react";

export default function Questionnaire() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    protectHome: "",
    financialProtection: "",
    protectedPeople: [],
    concerns: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Questionnaire data:", formData);
    // later → POST to /api/questionnaire
  };

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Let’s Get You Protected
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="input"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="input"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="input"
            onChange={handleChange}
            required
          />
        </div>

        {/* Protect Home */}
        <div>
          <p className="font-semibold mb-2">
            Are you trying to protect your home?
          </p>
          <div className="flex gap-4">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="protectHome"
                  value={option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Financial Protection */}
        <div>
          <p className="font-semibold mb-2">
            Are you trying to get financial protection for your family?
          </p>
          <div className="flex gap-4">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="financialProtection"
                  value={option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Who to Protect */}
        <div>
          <p className="font-semibold mb-2">
            Who would you want financially protected?
          </p>
          <div className="grid grid-cols-2 gap-2">
            {["Spouse/Partner", "Children", "Family", "No one", "Not sure yet"].map(
              (option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckbox("protectedPeople", option)
                    }
                  />
                  {option}
                </label>
              )
            )}
          </div>
        </div>

        {/* Biggest Concern */}
        <div>
          <p className="font-semibold mb-2">
            What’s your biggest concern right now?
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Family expenses",
              "Paying off debt",
              "Funeral cost",
              "Income replacement",
              "Just exploring options",
            ].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleCheckbox("concerns", option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold"
        >
          Continue
        </button>
      </form>
    </section>
  );
}
