
const { error } = require('console')
const File = require('fs')
const path = require('path')

const myfolder = path.join(__dirname,'myFolder') // path get 
console.log(myfolder)

for(let i = 0; i<5; i++){
    File.writeFileSync(`${myfolder}/show${i}.txt`,"This is File No:" + i)
}

File.readdir(myfolder, (error,items) =>{
    console.log(items)
    items.forEach((file) =>{ // forEach loop is used for line by line get
        console.log(file)
    })
})
