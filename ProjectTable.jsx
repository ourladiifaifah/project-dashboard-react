import React from 'react';

const ProjectTable = ({ projects }) => {
  return (
    <div>
      {/* Mobile list view */}
      <div className="space-y-4 md:hidden">
        {projects.map((project, idx) => (
          <div key={idx} className="p-4 border rounded-lg shadow-sm">
            <div className="font-semibold">{project.project_name}</div>
            <div className="text-sm text-gray-600">
              {project.start_date} - {project.planned_end_date}
            </div>
            <div className="text-sm">Progress: {Math.round(project.completion * 100)}%</div>
            <div
              className={`text-sm ${
                project.status.includes('เสร็จ')
                  ? 'text-green-600'
                  : project.status.includes('เกิน')
                  ? 'text-red-500'
                  : 'text-yellow-500'
              }`}
            >
              {project.status}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100 text-left text-sm font-semibold">
            <tr>
              <th className="p-2">Project</th>
              <th className="p-2">Start</th>
              <th className="p-2">End</th>
              <th className="p-2">Progress</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{project.project_name}</td>
                <td className="p-2">{project.start_date}</td>
                <td className="p-2">{project.planned_end_date}</td>
                <td className="p-2">{Math.round(project.completion * 100)}%</td>
                <td className="p-2">
                  <span
                    className={
                      project.status.includes('เสร็จ')
                        ? 'text-green-600'
                        : project.status.includes('เกิน')
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
