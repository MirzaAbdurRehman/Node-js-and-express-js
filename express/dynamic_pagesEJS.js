const express = require('express')
const path = require('path')
const public = path.join(__dirname,'public')
const app = express();

app.set('view engine', 'ejs')

app.get('/About/:name/:id',(req,res) =>{

    const empInfo ={
        name: req.params.name,
        id: req.params.id,
        fav:['BasketBall','Cricket','WollyBall','Bagmintan']
    }
    res.render('About',{empInfo} )
});


app.get('*',(req,res) =>{
    res.sendFile(
        `${public}/page_not_found.html`
    )
});

app.listen(2000,()=>{
    console.log('Server is running on Port:2000')
})