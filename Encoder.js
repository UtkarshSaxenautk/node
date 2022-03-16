const Queue = require('./timer.js');

const encoder = new TextEncoder();
const e = encoder.encode("Hello World");
console.log(e);
const decoder = new TextDecoder();
console.log(decoder.decode(e));

const url = new URL("/text", "https://www.helloworld.com/");
console.log(url);
console.log(url.searchParams.get('name'));
url.searchParams.append('name' , 'abc');
console.log(url.href);
console.log(__dirname);
console.log(__filename);
Queue.Queue();
