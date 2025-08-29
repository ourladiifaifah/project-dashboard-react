import React, { useState } from 'react';
import Home from './Home';
import TasksAnalytics from './TasksAnalytics';

const initialProjects = [
  {
    project_name: 'ออกแบบป้าย',
    start_date: '2025-08-01',
    planned_end_date: '2025-08-10',
    completion: 0.75,
    status: 'อยู่ระหว่างดำเนินการ',
    tasks: ['ตั้งค่าโครงร่าง', 'ออกแบบสี', 'เตรียมไฟล์พิมพ์'],
  },
  {
    project_name: 'Thai Travel Fair',
    start_date: '2025-08-03',
    planned_end_date: '2025-08-20',
    completion: 1.0,
    status: 'เสร็จสิ้น',
    tasks: ['จองบูธ', 'สร้างแบนเนอร์ออนไลน์', 'จัดทำเอกสารนำเสนอ', 'ประสานงานผู้ขาย'],
  },
  {
    project_name: 'รีแบรนด์ Café',
    start_date: '2025-07-15',
    planned_end_date: '2025-08-25',
    completion: 0.5,
    status: 'เกินกำหนด',
    tasks: ['สำรวจตลาด'],
  },
];

const App = () => {
  const [page, setPage] = useState('dashboard');
  const [projects, setProjects] = useState(initialProjects);

  const addTask = (projectIdx) => {
    setProjects((prev) => {
      const updated = [...prev];
      updated[projectIdx].tasks.push(`งานใหม่ ${updated[projectIdx].tasks.length + 1}`);
      return updated;
    });
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-48 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">TEM</h2>
        <nav className="space-y-2">
          <button
            onClick={() => setPage('dashboard')}
            className={`block w-full text-left p-2 rounded ${page === 'dashboard' ? 'bg-gray-700' : ''}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setPage('analytics')}
            className={`block w-full text-left p-2 rounded ${page === 'analytics' ? 'bg-gray-700' : ''}`}
          >
            Analytics
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {page === 'dashboard' && <Home projects={projects} addTask={addTask} />}
        {page === 'analytics' && <TasksAnalytics projects={projects} />}
      </main>
    </div>
  );
};

export default App;
