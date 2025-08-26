import React from 'react';

const TeamLeaderboard = ({ teamData }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Team Performance</h3>
      <ul className="divide-y divide-gray-200">
        {teamData.map((member, index) => (
          <li key={index} className="py-2 flex justify-between">
            <span>{member.name}</span>
            <span className="font-bold">{member.tasks_completed} tasks</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamLeaderboard;
