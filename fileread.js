var fs = require('fs');

// Asynchronous Read :---

fs.readFile('input.txt' , (err ,data) => {
    if (err) {
        return console.eroor(err);
    }
    console.log("Asynchronous Read  : " , data.toString());

})
// Synchronous Read :----
var d = fs.readFileSync('input.txt');

console.log("Synchronous read : " , d.toString());