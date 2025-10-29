"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "./AnalyticsTab.css"

// Mock data — you can replace this with real data from Google Analytics later
const mockData = [
  { name: "Mon", visitors: 120 },
  { name: "Tue", visitors: 190 },
  { name: "Wed", visitors: 170 },
  { name: "Thu", visitors: 220 },
  { name: "Fri", visitors: 200 },
  { name: "Sat", visitors: 150 },
  { name: "Sun", visitors: 180 },
];

const AnalyticsTab = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Website Analytics</h2>
        <p className="text-gray-500">Track your performance and weekly visitor activity.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Weekly Visitors</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Visitors</p>
          <p className="text-2xl font-bold">1,230</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Avg. Time on Site</p>
          <p className="text-2xl font-bold">3m 12s</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Conversion Rate</p>
          <p className="text-2xl font-bold">6.4%</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;
