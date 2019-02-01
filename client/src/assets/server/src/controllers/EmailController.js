const {User} = require('../models')
var config = require('../config/config')
var nodemailer = require("nodemailer")

/*
  Here we are configuring our SMTP Server details.
  STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: config.email.user,
        pass: config.email.password
    },
    tls: {
        rejectUnauthorized: false
    }
});
var rand,mailOptions,host,link;
/*------------------SMTP Over-----------------------------*/

module.exports = {
  async send(req, res) {
    rand=Math.floor((Math.random() * 100) + 54);
    host=req.get('host');
    uid=req.params.uid
    link="http://"+req.get('host')+"/verify/"+uid+"?id="+rand;
    console.log(req.body.to)
    mailOptions={
      to : req.body.to,
      subject : "Please confirm your Email account",
      html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        res.send("error");
      } else{
        console.log("Message sent: " + response.message);
        res.send("sent");
      }
    });
  },

  async verify(req, res) {
    console.log(req.protocol+":/"+req.get('host'));
    if((req.protocol+"://"+req.get('host'))==("http://"+host))
    {
      console.log("Domain is matched. Information is from Authentic email");
      if(req.query.id==rand)
      {
        console.log("email is verified");
        await User.update(
          {
            isVerified: true
          },
          {
            where: {
              id: req.params.uid
            }
          })
        res.status(200).send("<h1>Email "+mailOptions.to+" is been Successfully verified");
      }
      else
      {
        console.log("email is not verified");
        res.status(400).send("<h1>Bad Request</h1>");
      }
    }
    else
    {
      res.end("<h1>Request is from unknown source");
    }
  }
}