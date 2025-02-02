"use client";

import React from "react";

interface Employee {
  id: string;
  name: string;
  position: string;
  email: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border  border-gray-300 shadow-lg rounded-lg">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Position</th>
            <th className="px-4 py-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{employee.name}</td>
                <td className="border px-4 py-2">{employee.position}</td>
                <td className="border px-4 py-2">{employee.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center text-gray-500 py-4">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
