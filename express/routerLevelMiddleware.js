const express = require('express')
const reqFilter = require('./reqFilterMiddleware')
const app = express();

const route = express.Router();   // Through this is was applying MultipleLevel Routing
route.use(reqFilter)



app.get('/faq',reqFilter,(req,res) =>{  // Single Level Middleware

    res.send('This is Our FAQ Page')
});


app.get('',(req,res) =>{ 

    res.send('This is Our Home Page')
});



route.get('/about',(req,res) =>{  // MultipleLevel Routing

    res.send('This is Our About Us Page')
});
route.get('/contact',(req,res) =>{  // MultipleLevel Routing

    res.send('This is Our Contact Us Page')
});

app.use('',route)  // Through this help for applying routing and its mean routing home page se start hogi

app.listen(2000,()=>{
    console.log('Server is Running on Prot: 2000')
})