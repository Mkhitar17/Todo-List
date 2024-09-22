import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; 

const initialState = {
    employees: [
        { id: 1, firstName: 'Ramesh', lastName: 'Fadatare', email: 'ram@gmail.com' },
        { id: 2, firstName: 'John', lastName: 'Cena', email: 'john@gmail.com' },
        { id: 3, firstName: 'Tom', lastName: 'Cruise', email: 'tom@gmail.com' },
        { id: 4, firstName: 'Admin', lastName: 'admin', email: 'admin@gmail.com' },
    ]
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees, { id: state.employees.length + 1, firstName: '', lastName: '', email: '' }],
            };
        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload),
            };
        case 'UPDATE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.map(employee =>
                    employee.id === action.payload.id ? { ...employee, ...action.payload.data } : employee
                ),
            };
        default:
            return state;
    }
};

const store = createStore(
    employeeReducer,
    applyMiddleware(thunk) 
);

export default store;
