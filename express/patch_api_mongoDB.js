const express = require('express')
const app = express();

const connectDB = require('./db/db_connection');
connectDB();

const employeeModel = require('./models/employeeModel');