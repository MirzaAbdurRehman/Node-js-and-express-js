const { error } = require('console');
const fs = require('fs')
const path = require('path')

const getFolder = path.join(__dirname,'CRUD')

const myFile = `${getFolder}/create.txt`;

// create file

// fs.writeFileSync(myFile,'Create Read Update Delete')

// // read file

// fs.readFile(myFile, 'utf8',(error,file)=>{   // Utf8 is using for convet hexadecimal to strings
//     console.log(file)
// })

// update file

fs.appendFile(myFile, ' in Node JS', (error)=>{
    if(!error){
        console.log('Your File iS Updated Succesfully')
    }
})


// delete file

// fs.unlinkSync(myFile,(error)=>{
//     if(!error){
//         console.log('Your File iS Deleted Succesfully')
//     }
// })


// rename file 

fs.rename(myFile,`${getFolder}/renameCRUD.txt`,(error)=>{
    if(!error){
        console.log('Reanme File Successfully')}
})


