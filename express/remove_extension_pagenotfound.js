const exprees =  require('express')
const path = require('path')
const public =  path.join(__dirname,'public')
const app = exprees();


app.get('',(req,res) =>{
    res.sendFile(
        `${public}/index.html`
    )
})

app.get('/home',(req,res) =>{
    res.sendFile(
        `${public}/home.html`
    )
})


app.get('*',(req,res) =>{
    res.sendFile(
        `${public}/page_not_found.html`
    )
});

app.listen(3000, () =>{
    console.log('Srver is running on Port: 3000')
})