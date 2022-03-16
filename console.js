const fs = require('fs')
const console = require('console')

const out = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');


const myob = new console.Console(out , err);

myob.log('This is first example');

myob.log('This is the %s example' , 'second');

myob.error(new Error('In this we creating some error'));

const num = 'third';
myob.warn(`this is the ${num} example`)