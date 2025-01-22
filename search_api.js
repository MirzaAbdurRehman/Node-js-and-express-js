const express = require('express')
const app = express();

const connectDB = require('./db/db_connection')
connectDB();

const employeeModel = require('./models/employeeModel')

app.get('/search-emp/:value', async (req,res) =>{
    let searchValue = req.params.value;
    let result = await employeeModel.find({
        '$or': [
            {'name':{$regex: searchValue, $options: 'i' }},
            {'email':{$regex: searchValue, $options: 'i' }},
            {'position':{$regex: searchValue, $options: 'i' }},
            {'department':{$regex: searchValue, $options: 'i' }}
        ]
    });
    res.send(result);

});

app.listen(2000, () =>{
    console.log('Sever is running on port: 2000')
})