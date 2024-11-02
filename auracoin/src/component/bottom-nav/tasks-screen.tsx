
import React from 'react';

export default function TasksScreen() {
    return (
      <div className="p-4 text-white">
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        <ul className="list-disc list-inside">
          <li>Complete project proposal</li>
          <li>Review code changes</li>
          <li>Schedule team meeting</li>
        </ul>
      </div>
    )
  }