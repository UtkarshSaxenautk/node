var fs = require('fs');

var data = "\n Leaning Node Js";
var fd ;



fs.readFile('input.txt' , (err ,data) => {
    if (err) {
        return console.eroor(err);
    }
    console.log("Asynchronous Read  : " , data.toString());
    fd = 10 ;
    fs.close(fd , (err)=> {
        if(err){
            console.log(err);
        }
        console.log("File Closed Successfully");
    })
})

