const exprees = require('express')
const path = require('path')
const public = path.join(__dirname,'public')
const app = exprees()

app.set('view engine', 'ejs')


app.get('/welcome',(req,res) =>{

    const empInfo ={
        name:'Irteza',
        id: 11786
    }
    res.render('Welcome',{empInfo} )
});


app.get('*',(req,res) =>{
    res.sendFile(
        `${public}/page_not_found.html`
    )
});

app.listen(2000,()=>{
    console.log('Server is running on Port:2000')
})