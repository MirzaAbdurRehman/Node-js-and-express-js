const express = require('express')

const app = express();  // exprees execution

app.get('',(req, res) =>{
    res.send(
        'Good Afternoon From Express JS'
    )
}) ;

app.get('/contact',(req, res) =>{
    res.send(
        'Contact US'
    )
}) ;

app.listen(1000)