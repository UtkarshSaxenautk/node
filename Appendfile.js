var fs = require('fs');

var data = "\n Leaning Node Js";

fs.appendFile('input.txt' , data , 'utf-8' , (err)=> {
    if(err) {
        throw err ;
    }
    console.log("Data is appended to file ");
})