import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectStatusPie = ({ data, labels = ['On Track', 'At Risk', 'Off Track'] }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Projects',
        data: data,
        backgroundColor: ['#3B82F6', '#FACC15', '#EF4444'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full md:w-1/2">
      <h3 className="text-lg font-semibold mb-2">Projects Overview</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default ProjectStatusPie;
