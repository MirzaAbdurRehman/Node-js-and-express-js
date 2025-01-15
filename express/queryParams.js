
const express = require('express')

const app = express();  // Execution express package or instance created

app.get('',(req, res) =>{

    const name = req.query.name;  // query parameters

    if(name){
        res.send(`Welcome ${name}`)
    }else{
         res.send(
           'Good Afternoon From Express JS'
         ) 
    }
});
app.listen(2000,() =>{
    console.log('Server is running on Port: 2000')
})
