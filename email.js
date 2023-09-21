var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'machadolauandra@gmail.com',
    pass: 'cnwk vnky tdpj lemd'
  }
});

var mailOptions = {
  from: 'machadolauandra@gmail.com',
  to: 'joedio.borges.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'cnwk vnky tdpj lemd'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 