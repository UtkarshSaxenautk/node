function SImm() {
    console.log("Set Immediate method called");
}

const CImm = () => {
    console.log("Clear Immediate method called");
}

const SetInt = () => {
    console.log("Set Interval method called");
}

const ClInt = () => {
    console.log("Clear Interval method called");
}

const STime = ()=> {
    console.log("Set Timeout method called");
}

const CTime = () => {
    console.log("Clear Timeout method called");
}

const Queue = () => {
    console.log("QueueMicrotask method called");
}

//setInterval(SetInt , 7000);
clearImmediate(SImm);
setImmediate(SImm);
//clearInterval(SetInt);
//setInterval(SetInt , 8000);
clearImmediate(SImm);
setImmediate(SImm);
setTimeout(STime , 3000);
queueMicrotask(Queue);

module.exports = {Queue}
