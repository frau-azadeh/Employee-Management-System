"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "@/utils/axiosConfig";

interface Employee{
    id: string;
    name: string;
    position: string;
    email: string;
}

interface EmployeeContextType{
    employees: Employee[];
    addEmployee: (employee: Omit<Employee, "id">) => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);
export const EmployeeProvider = ({ children } : {children: ReactNode}) =>{
    const [employees, setEmployees] = useState <Employee[]>([]);

useEffect(()=>{
    const fetchEmployees = async ()=>{
        try{
            const response = await api.get("/employee/managment");
            console.log("fetched Employee", response.data);
        }catch(error){
            console.error("Error fetching employees:", error)
        }
    };
    fetchEmployees();
},[]);

const addEmployee = async (employee: Omit<Employee, "id">) => {
    try {
      const response = await api.post("/employee/managment", employee);
      
      console.log("Server Response:", response.data); // بررسی پاسخ سرور
      
      setEmployees((prev) => [...prev, response.data]);
      
      console.log("Updated Employees List:", employees); // بررسی ذخیره شدن
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };
  
    return(
        <EmployeeContext.Provider value= {{employees, addEmployee}} >
            {children}
        </EmployeeContext.Provider>
    );
};

export const useEmployeeContext = () =>{
    const context = useContext(EmployeeContext);
        if(!context){
            throw new Error("useEmployeeContext must be use within an EmployeeProvider");
    }
    return context;
}
