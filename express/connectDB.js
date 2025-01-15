const express = require('express')
const app = express();

const connectDb = require('./db/db_connection')  // import DB Connection
connectDb(); // Execute DB Connection

const user = require('./models/userModel')  // import UserModel

const addUser = async () => {
    await user.create({
        name: "Ali",
        email: 'ali12@gmail.com',
    })
}

addUser();

app.listen(2000, ()=> {
    console.log('Server is running on Port:2000')
})