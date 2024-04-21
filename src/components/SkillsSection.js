import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const skillsData = [
  { skill: "JavaScript", proficiency: 90 },
  { skill: "React", proficiency: 85 },
  { skill: "Node.js", proficiency: 80 },
  { skill: "CSS", proficiency: 75 },
  { skill: "HTML", proficiency: 95 },
];

const chartData = {
  labels: skillsData.map((skill) => skill.skill),
  datasets: [
    {
      label: "Proficiency",
      data: skillsData.map((skill) => skill.proficiency),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        // Add more colors for each skill
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        // Add more border colors
      ],
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function SkillsSection() {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default SkillsSection;
