"use client"

import { createContext, ReactNode, useContext, useState } from "react";
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

    const addEmployee = (employee: Omit<Employee, "id">) =>{
        setEmployees((prev)=>[
           ...prev,
          { ...employee, id: Date.now().toLocaleString() } ,
        ]);
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
