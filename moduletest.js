const Student = {
    name : (n) => {
        console.log("Name : " , n);
    },
    standard: (s) => {
        console.log("Standard : " , s);
    },
    currtime : new Date().toLocaleTimeString(),
    print : () => {
        console.log(Student.currtime)
    }
    
}

module.exports = {
    Student
}