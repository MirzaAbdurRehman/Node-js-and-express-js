
const express = require('express')

const app = express();

app.get('/home', (req,res) =>{
    res.send(  // Html response
        `
         <h2>Home Page.</h2>
         <a href="/contact">Go to Contact Page</a>
        `
    )
});

app.get('/contact', (req,res) =>{
    res.send(
        `
         <h2>Contact Page.</h2>
         <a href="/about">Go to About Page</a>
        `
    )
});


app.get('/about', (req,res) =>{
    res.send(   // Json Response
       [
        {name:'Ali',age:22,profession:'Software Engineer'},
        {name:'Ali',age:22,profession:'Software Engineer'},
        {name:'Ali',age:22,profession:'Software Engineer'}
       ]
    )
});

app.listen(1000, () => {
    console.log("Server is running on port 1000");
});