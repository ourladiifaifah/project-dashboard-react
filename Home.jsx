import React from 'react';
import DashboardCard from './DashboardCard';
import ProjectStatusPie from './ProjectStatusPie';
import ProjectTable from './ProjectTable';
import TeamLeaderboard from './TeamLeaderboard';

const dummyProjects = [
  { project_name: 'ออกแบบป้าย', start_date: '2025-08-01', planned_end_date: '2025-08-10', completion: 0.75, status: 'อยู่ระหว่างดำเนินการ' },
  { project_name: 'Thai Travel Fair', start_date: '2025-08-03', planned_end_date: '2025-08-20', completion: 1.0, status: 'เสร็จสิ้น' },
  { project_name: 'รีแบรนด์ Café', start_date: '2025-07-15', planned_end_date: '2025-08-25', completion: 0.5, status: 'เกินกำหนด' },
];

const dummyTeam = [
  { name: 'ไฟฟ้า', tasks_completed: 14 },
  { name: 'บีม', tasks_completed: 9 },
  { name: 'แอน', tasks_completed: 6 },
];

const Home = () => {
  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold">📊 Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <DashboardCard title="โปรเจกต์ทั้งหมด" value="12" color="bg-blue-600" />
        <DashboardCard title="กำลังดำเนินการ" value="5" color="bg-yellow-500" />
        <DashboardCard title="เสร็จสิ้น" value="7" color="bg-green-500" />
      </div>

      {/* Pie Chart + Leaderboard */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        <ProjectStatusPie data={[5, 3, 2]} />
        <TeamLeaderboard teamData={dummyTeam} />
      </div>

      {/* Table of Projects */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">📁 รายชื่อโปรเจกต์</h2>
        <ProjectTable projects={dummyProjects} />
      </div>
    </div>
  );
};

export default Home;
