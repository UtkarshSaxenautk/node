var fs = require('fs');

console.log("Writing into existing file");
fs.writeFile('input.txt' , 'Good luck : Learning Go' , (err)=> {
    if(err){
        return console.error(err);
    }

    console.log("data Written Successfully");
    console.log("Let's Read newly written file");

    fs.readFile('input.txt' , (err , data)=> {
        if(err){
            return console.error(err);
        }
        console.log("Asynchronous read : " + data.toString());
    })
})
