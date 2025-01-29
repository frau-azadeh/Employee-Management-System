"use client";

import React from "react";
import { useEmployeeContext } from "@/context/EmployeeContext";

export default function EmployeesPage() {
  const { employees } = useEmployeeContext();
  
  console.log("Employees from Context in List Page:", employees); // بررسی مقدار

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}
