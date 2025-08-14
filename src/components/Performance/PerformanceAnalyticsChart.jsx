import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const barData = [
  { name: "MIDTERM", score: 35 },
  { name: "FINAL", score: 20 },
  { name: "ASSIGNMENT", score: 30 },
  { name: "QUIZ", score: 42 },
];

const pieData = [
  { name: "Present", value: 85 },
  { name: "Absent", value: 15 },
];

const COLORS = ["#4CAF50", "#EF5350", "#42A5F5", "#FF9800", "#9C27B0"];

const PerformanceAnalyticsChart = () => {
  const [activeTab, setActiveTab] = useState("class");

  return (
    <div className="p-6 font-sans max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-500">Performance Analytics</h1>
        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <AiOutlineHome className="text-gray-600" />
          <span>/</span>
          <span>Performance analytics</span>
          <span>/</span>
          <span className="text-blue-700 font-semibold">Performance analytics</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <Link to="/analytics">
          <button
            onClick={() => setActiveTab("student")}
            className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-800 hover:text-white ${activeTab === "student"
              ? "bg-blue-700 text-white"
              : "bg-gray-100 text-gray-600"
              }`}
          >
            Student Report
          </button>
        </Link>
        <Link to="/analytics/chart">
          <button
            onClick={() => setActiveTab("class")}
            className={`px-4 py-2 rounded-lg font-medium hover:bg-blue-800 hover:text-white ${activeTab === "class"
              ? "bg-blue-700 text-white"
              : "bg-gray-100 text-gray-600"
              }`}
          >
            Class Analytics
          </button>
        </Link>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-8">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Class</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Please select Class</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Exam</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Exam</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Students</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Please select Students</option>
          </select>
        </div>
        <div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 hover:text-white">
            <FaFilter /> Apply Filters
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Exam & Assignment Averages
          </h3>
          <BarChart width={400} height={250} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score">
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Attendance Rate</h3>
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              // labelLine={false}
              // label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalyticsChart;
