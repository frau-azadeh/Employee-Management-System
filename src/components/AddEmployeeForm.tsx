"use client"

import { useEmployeeContext } from '@/context/EmployeeContext';
import React from 'react'
import { useForm } from 'react-hook-form';

interface FormInput{
    name: string;
    position: string;
    email: string;
}

export const AddEmployeeForm: React.FC = () => {
    const {addEmployee} = useEmployeeContext();
    const {register, handleSubmit, reset} = useForm<FormInput>();
 
 const onSubmit = async (data: FormInput) =>{
    console.log("Form Data:", data); 
    await addEmployee(data); 
    reset();
 }

    return (
    <div className='flex items-center justify-center h-screen '>
        <form onSubmit={handleSubmit(onSubmit)} className='p-4 bg-slate-400 rounded-lg shadow w-full max-w-md'>
            <h2 className='text-lg font-bold mb-4 text-slate-900'>Add Employee</h2>
            <div className='mb-4'>
                <label className='block text-md font-medium text-white'>Name: </label>
                <input
                    {...register("name", {required: true})}
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-cyan-300 p-2'
                    placeholder='Enter Name:'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-md font-medium text-white'>Position: </label>
                <input
                    {...register("position", {required: true})}
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-cyan-300 p-2'
                    placeholder='Enter position'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-md font-medium text-white'>Email: </label>
                <input
                    {...register("email", {required: true})}
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-cyan-300 p-2'
                    type="email"
                    placeholder='Enter Email'
                />
            </div>
            <button
                type='submit'
                className='p-2 bg-slate-700 text-white rounded hover:bg-slate-900'
            >
                Add Employee
            </button>
        </form>
    </div>
  )
}
