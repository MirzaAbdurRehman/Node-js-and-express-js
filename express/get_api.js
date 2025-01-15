const express = require('express')
const app = express();

const connectDB = require('./db/db_connection')
connectDB();

const employeeModel = require('./models/employeeModel')

app.get('/employee', async (req,res) => {
    try {
           const employees = await employeeModel.find(); // Wait for the data
           res.json(employees)
       } catch (err) {
           console.error('Error fetching employees Data:', err);
           res.status(500).send('Sever Error')
       }
});

app.get('/employee/:id', async (req,res) => {
    
    try {
           const employees = await employeeModel.findById(req.params.id); // Wait for the data
           if(!employees){
            res.status(404).send({ msg: 'Employee Not Found!' })
           }
           res.json(employees)
       } catch (err) {
           console.error('Error fetching employees Data:', err);
           res.status(500).send('Sever Error')
       }
});

app.listen(2000, () => {
    console.log('Server is Running on Port: 2000')
})