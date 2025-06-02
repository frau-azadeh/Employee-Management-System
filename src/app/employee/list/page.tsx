"use client";

import React, { useEffect, useState } from "react";
import EmployeeTable from "@/components/EmployeeTable";
import api from "@/utils/axiosConfig";

interface Employee {
  id: string;
  name: string;
  position: string;
  email: string;
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get("/employee/managment");
        setEmployees(response.data);
        console.log("Fetched Employees:", response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Employees List
      </h1>
      <EmployeeTable employees={employees} />
    </div>
  );
}
