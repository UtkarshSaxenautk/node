var fs = require('fs');

var buf = Buffer.alloc(1024);

console.log("Opening an existing file");

fs.open('input.txt' , 'r+' , (err , data)=> {
    if(err) {
        return console.error(err);
    }
    console.log("file Opened successfully !");
    console.log("reading the file");
   var fd = data ;

    fs.read(fd , buf , 0 , buf.length , 0 , (err , bytes)=> {
        if(err) {
            console.log(err);
        }
        console.log(bytes + " bytes read");
        if(bytes > 0) {
            console.log(buf.slice(0 , bytes).toString());
        }
    });

});