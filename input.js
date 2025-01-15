
const File = require('fs')

const action = process.argv[2]
const fileName = process.argv[3]
const data = process.argv[4]

// console.log(process.argv)

if(action == 'create'){
    File.writeFileSync(fileName,data)
}
else if(action == 'delete'){
    File.unlinkSync(fileName)
}
else{
    console.log('Invalid Action')
}