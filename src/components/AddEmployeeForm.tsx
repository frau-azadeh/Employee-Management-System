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
 
 const onSubmit = (data: FormInput) =>{
    addEmployee(data);
    reset();
 }
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='p-4 bg-slate-500 rounded-lg shadow'>
            <h2 className='text-lg font-bold mb-4'>Add Employee</h2>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                    {...register("name", {required: true})}
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-cyan-300'
                    placeholder='Enter Name:'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Position</label>
                <input
                    {...register("position", {required: true})}
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-cyan-300'
                    placeholder='Enter position'
                />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>Email: </label>
                <input
                    {...register("position", {required: true})}
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-cyan-300'
                    type="email"
                    placeholder='Enter Email'
                />
            </div>
            <button
                type='submit'
                className='px-4 bg-blue-500 text-white rounded hover:bg-blue-700'
            >
                Add Employee
            </button>
        </form>
    </div>
  )
}
