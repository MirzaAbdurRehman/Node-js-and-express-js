const express = require('express')
const app = express();

const connectDB = require('./db/db_connection')
connectDB();

const employeeModel = require('./models/employeeModel')

app.delete('/employee/:id', async (req,res) => {
    try{
        const employeeID = req.params.id
        const deleteEmployee = await employeeModel.findByIdAndDelete(employeeID);

        if(!deleteEmployee){
            return res.status(404).send({msg: 'Employee Not Found!'})
        }
        else{
            res.send({msg: 'Emplyee Deleted Successfully!.'})
        }
    }
    catch(error){
        console.error('Error fetching employees Data:', error);
           res.status(500).send('Sever Error')
    }
});

app.listen(2000, () =>{
    console.log('Server is Running on Port: 2000');
})