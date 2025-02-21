"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// 1️⃣ Register Chart.js Components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type SubcategoryType = Record<string, number>;

type CategoryDataType = {
  category: string;
  total: number;
  subcategories: SubcategoryType;
};

type ChartDataType = {
  categories: string[];
  data: CategoryDataType[];
};

const SkillChartStacked = () => {
  // 2️⃣ Your Data
  const chartDataObj: ChartDataType = {
    categories: ["Frontend", "Backend", "Databases", "Tools & DevOps"],
    data: [
      {
        category: "Frontend",
        total: 80,
        subcategories: { React: 40, "Vue.js": 10, Tailwind: 30 },
      },
      {
        category: "Backend",
        total: 85,
        subcategories: { "Node.js": 60, Django: 10, Firebase: 15 },
      },
      {
        category: "Databases",
        total: 90,
        subcategories: { MongoDB: 15, MySQL: 45, PostgreSQL: 30 },
      },
      {
        category: "Tools & DevOps",
        total: 60,
        subcategories: { Git: 40, AWS: 20 },
      },
    ],
  };

  // 3️⃣ Extract Labels (Categories) & Subcategories
  const labels = chartDataObj.data.map((item) => item.category);

  // Collect all unique subcategory names
  const subcategorySet = new Set<string>();
  chartDataObj.data.forEach((item) => {
    Object.keys(item.subcategories).forEach((subKey) => subcategorySet.add(subKey));
  });
  const subcategories = Array.from(subcategorySet);

  // 4️⃣ Define Colors for Each Subcategory Stack
  const colorPalette = [
    "#EF4444", // Red
    "#F97316", // Orange
    "#F59E0B", // Amber
    "#10B981", // Green
    "#3B82F6", // Blue
    "#A855F7", // Purple
    "#EC4899", // Pink
    "#14B8A6", // Teal
    "#FB923C", // Orange
    "#C084FC", // Light Purple
    "#E879F9", // Light Pink
  ];

  // 5️⃣ Create a Dataset for Each Subcategory
  const datasetValues = subcategories.map((subcat, idx) => ({
    label: subcat,
    data: chartDataObj.data.map(
      (category) => category.subcategories[subcat] ?? 0
    ),
    backgroundColor: colorPalette[idx % colorPalette.length],
    borderWidth: 1,
  }));

  // 6️⃣ Final Chart Data
  const chartData = {
    labels,
    datasets: datasetValues,
  };

  // 7️⃣ Chart Options (Stacked)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: { color: "#f2f2f2" },
        grid: { display: false },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: { color: "#f2f2f2" },
        grid: { color: "#4B5563" },
      },
    },
    plugins: {
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[800px] p-6 bg-[#0F172A] rounded-lg">
    {/* Ensure Bar Chart Container has a fixed height */}
    <div className="relative h-full">
      <Bar data={chartData} options={options} style={{height:"500px"}}/>
    </div>
  </div>

  );
};

export default SkillChartStacked;
