const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const app = nodemailer();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
    

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'prelodiv@gmail.com',
    pass: 'Nomeacuerdo09' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'prelodiv@gmail.com',
  to: 'correo.correo',
  subject: 'Bienvenido ',
  text: 'esto funciona.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

});