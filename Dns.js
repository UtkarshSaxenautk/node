const dns = require('dns')

const website = 'geeksforgeeks.org';
dns.lookup(website , (err , address , family) => {
    console.log('address of ' , website , " is " , address , " family : IPv" , family)
})