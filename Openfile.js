var fs = require('fs');

// Asunchronous - Opening file

console.log("opening file !")

fs.open('input.txt' , 'r+' , (err ,data)=> {
    if(err) {
        return console.error(err)
    }
    console.log("File Open Succesfully Asynchronously");
    
})

var f = fs.openSync('input.txt' ,'r+');
console.log("File opened successfully synchronously")