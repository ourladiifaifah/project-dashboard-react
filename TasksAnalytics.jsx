import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const TasksAnalytics = ({ projects }) => {
  const [chartType, setChartType] = useState('bar');

  const labels = projects.map((p) => p.project_name);
  const dataValues = projects.map((p) => p.tasks.length);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Tasks',
        data: dataValues,
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
        fill: false,
      },
    ],
  };

  const ChartComponent = chartType === 'bar' ? Bar : Line;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📈 Tasks per Project</h1>
        <button
          onClick={() => setChartType(chartType === 'bar' ? 'line' : 'bar')}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Switch to {chartType === 'bar' ? 'Line' : 'Bar'} Chart
        </button>
      </div>
      <ChartComponent data={chartData} />
    </div>
  );
};

export default TasksAnalytics;
