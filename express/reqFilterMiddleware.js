const reqFilter = (req, res, next) => {   // It is function which pass three paramaters 
    const salary = req.query.salary;
    if(!salary){
        res.send('Salary Not Provided')
    }else if(salary <50000){
        res.send('Salary is less than 50000')
    }else{
        next();
    }
}

module.exports = reqFilter;
