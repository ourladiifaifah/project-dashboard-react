import React from 'react';
import DashboardCard from './DashboardCard';
import ProjectStatusPie from './ProjectStatusPie';
import ProjectTable from './ProjectTable';
import TeamLeaderboard from './TeamLeaderboard';

const dummyTeam = [
  { name: 'ไฟฟ้า', tasks_completed: 14 },
  { name: 'บีม', tasks_completed: 9 },
  { name: 'แอน', tasks_completed: 6 },
];

const Home = ({ projects, addTask }) => {
  const totalProjects = projects.length;
  const inProgress = projects.filter(
    (p) => p.status === 'อยู่ระหว่างดำเนินการ'
  ).length;
  const completed = projects.filter((p) => p.status === 'เสร็จสิ้น').length;
  const statusCounts = [
    inProgress,
    completed,
    projects.filter((p) => p.status === 'เกินกำหนด').length,
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">📊 Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <DashboardCard title="โปรเจกต์ทั้งหมด" value={totalProjects} color="bg-blue-600" />
        <DashboardCard title="กำลังดำเนินการ" value={inProgress} color="bg-yellow-500" />
        <DashboardCard title="เสร็จสิ้น" value={completed} color="bg-green-500" />
      </div>

      {/* Pie Chart + Leaderboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectStatusPie data={statusCounts} labels={['กำลังดำเนินการ','เสร็จสิ้น','เกินกำหนด']} />
        <TeamLeaderboard teamData={dummyTeam} />
      </div>

      {/* Table of Projects */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">📁 รายชื่อโปรเจกต์</h2>
        <ProjectTable projects={projects} />
      </div>

      {/* Task Controls */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">🛠️ จัดการงาน</h2>
        <ul className="space-y-2">
          {projects.map((project, idx) => (
            <li key={idx} className="flex items-center">
              <span className="flex-1">
                {project.project_name}: {project.tasks.length} tasks
              </span>
              <button
                onClick={() => addTask(idx)}
                className="px-2 py-1 bg-blue-600 text-white rounded"
              >
                Add Task
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
