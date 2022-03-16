var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'utkarshsaxena2012@gmail.com',
        pass:'Utkarsh@@@2003'
    }
})

var mailOptions = {
    from: 'utkarshsaxena2012@gmail.com',
    to: 'mymail2yash11@gmail.com , utkarshsaxenautk03@gmail.com',
    subject: 'Mail from node js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions , (err , info)=> {
    if(err){
        console.log(err);
    }
    else {
        console.log('Email sent ' + info.response);
    }
});