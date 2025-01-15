const express = require('express')
const app = express();


const reqFilter = (req, res, next) => {   // It is function which pass three paramaters 
    const salary = req.query.salary;
    if(!salary){
        res.send('Salary Not Provided')
    }else if(salary <60000){
        res.send('Salary is less than 60000')
    }else{
        next();
    }
}

app.use(reqFilter);   // Middle Ware Application Level sb routes pr apply hogi

app.get('',(req,res) =>{

    res.send('This is Our Middle Ware')
});
app.get('/about',(req,res) =>{

    res.send('This is Our About Us Page')
});

app.listen(2000,()=>{
    console.log('Server is Running on Prot: 2000')
})