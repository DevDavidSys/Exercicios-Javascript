var nodemailer = require('nodemailer');
for(i=0;i<1;i++){
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'testedavi37@gmail.com',
      pass: "###"
    }
  });
  
  var mailOptions = {
    from: 'testedavi37@gmail.com',
    to: 'job.davic@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}