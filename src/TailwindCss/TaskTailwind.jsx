import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

const TaskTailwind = () => {
    const employees = useSelector(state => state.employees);
    const dispatch = useDispatch();

    const handleAddEmployee = () => {
        dispatch({ type: 'ADD_EMPLOYEE' });
    };

    const handleDeleteEmployee = (id) => {
        dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
    };

    const handleInputChange = (id, field, value) => {
        dispatch({ type: 'UPDATE_EMPLOYEE', payload: { id, data: { [field]: value } } });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Employee Management App</h1>
            <button onClick={handleAddEmployee} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Employee
            </button>

            <div className="w-full mt-4">
                <div className="flex flex-col">
                    <div className="text-gray-600 uppercase text-sm leading-normal py-3 px-6 flex">
                        <div className="flex-1 border-b border-gray-300">Employee First Name</div>
                        <div className="flex-1 border-b border-gray-300">Employee Last Name</div>
                        <div className="flex-1 border-b border-gray-300">Employee Email Id</div>
                        <div className="flex-1 border-b border-gray-300">Actions</div>
                    </div>
                    {employees.map((employee) => (
                        <div
                            key={employee.id}
                            className="flex flex-col bg-white hover:bg-gray-100 text-gray-800 text-sm font-light leading-normal py-3 px-6"
                        >
                            <div className="flex">
                                <div className="flex-1 border-b border-gray-300 pt-[-10px]">
                                    <input
                                        type="text"
                                        value={employee.firstName}
                                        onChange={(e) => handleInputChange(employee.id, 'firstName', e.target.value)}
                                        className="border-none rounded p-1 w-full outline-none "
                                    />
                                </div>
                                <div className="flex-1 border-b border-gray-300 pt-[-10px]" >
                                    <input
                                        type="text"
                                        value={employee.lastName}
                                        onChange={(e) => handleInputChange(employee.id, 'lastName', e.target.value)}
                                        className="border-none rounded p-1 w-full outline-none"
                                    />
                                </div>
                                <div className="flex-1 border-b border-gray-300 pt-[-30px]">
                                    <input
                                        type="email"
                                        value={employee.email}
                                        onChange={(e) => handleInputChange(employee.id, 'email', e.target.value)}
                                        className="border-none rounded p-1 w-full outline-none"
                                    />
                                </div>
                                <div className="flex-1 border-b border-gray-300 flex items-center space-x-2 mt-[-20px]">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => console.log('Update employee:', employee.id)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleDeleteEmployee(employee.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => console.log('View employee:', employee.id)}
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default TaskTailwind;
