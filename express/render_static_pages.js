const exprees =  require('express')
const path = require('path')
const public =  path.join(__dirname,'public')
const app = exprees();


console.log(public)

app.use(exprees.static(public))  // it helps to show render Static pages

app.listen(2000, () =>{
    console.log('Srver is running on Port: 2000')
})