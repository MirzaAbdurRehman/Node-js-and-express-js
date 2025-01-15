const express = require('express')
const app = express();

const connectDB = require('./db/db_connection')
connectDB();

const EmployeeModel = require('./models/employeeModel')

const addEmployeeData = async () =>{
    await EmployeeModel.create({
        name: 'Bilal',
        email: 'Bilal12@gmail.com',
        position: 'Junior',
        department: 'Marketing'
    })
}

addEmployeeData();


const getEmployeeData = async () => {
    try {
        const employees = await EmployeeModel.find(); // Wait for the data
        console.log('Employees:', employees);
    } catch (err) {
        console.error('Error fetching employees:', err);
    } 
}

getEmployeeData();

app.listen(2000, () => {
    console.log('Server is running on Port: 2000')
})