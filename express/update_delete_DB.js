const express = require('express')
const app = express();

const connectDB = require('./db/db_connection')
connectDB();

const employeeModel = require('./models/employeeModel')

const getEmployeeData = async () => {  // Get Employee Data
    try {
           const employees = await employeeModel.find(); // Wait for the data
           console.log('Employees:', employees);
       } catch (err) {
           console.error('Error fetching employees:', err);
       } 
}

const updateEmployeeData = async (id, updateData) => {   // Update Data by id and given Update Data
    const result = await employeeModel.updateOne({_id: id}, {$set: updateData});
    console.log(
        result.nModified === 0? `No Update for employee ${id}` : 'Updated employee data: ',result
    )
}


const deleteEmployeeData = async (id) => {  // Delete Employee Data by id
    const result = await employeeModel.findByIdAndDelete(id);
    console.log(`Delete Employee ${id}`)
}


const main = async () => {

    await getEmployeeData();

    const employeeID = '677dbaf95295c421c2d1bcd8';
    const updateData = {
        position: 'Senior SE',
        department: 'Development'
    }

    await updateEmployeeData(employeeID,updateData);
    await getEmployeeData();

    await deleteEmployeeData(employeeID);
    await getEmployeeData();
}


main();

app.listen(2000, () => {
    console.log('sever is running on Port: 2000')
})
