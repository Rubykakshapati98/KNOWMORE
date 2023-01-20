const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const dotenv = require("dotenv");
dotenv.config();
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND,
);

// send mail
const sendEmail = (to, url, name, txt) => {
  console.log("send mail");
  // oauth2Client.setCredentials({
  //   // access_token : MAILING_SERVICE_CLIENT_SECRET,
  //   refresh_token: `1//04MeAB902HTqXCgYIARAAGAQSNwF-L9IrJ3DtNez2Zb6PzDQXSdYrM6W-mBkH3-oVeqtCz9yhGKtjZF9gMGAAE57WgEHsYllOMu0`,
  // });

  // const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // type: "OAuth2",
      // user: `sanjumaharjan683@gmail.com`,
      // clientId:  `576011759116-t51r421j7ulfrm6a2t1kkemfilvk7d9d.apps.googleusercontent.com`,
      // clientSecret: `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`,
      // refreshToken: `1//04mCuASFPW5IICgYIARAAGAQSNwF-L9IraGs_5RcLUEYJWLEYGMffY02m65oB28Vywvw-Frvdg9CgB90-iyTmMT-gCtFMx4pLCWM`,
      // accessToken,
      user: 'sanjumaharjan683@gmail.com',
      pass: 'mzouttsrjgsraqqf'
    },
  });

  const mailOptions = {
    from: "cycosan00@gmail.com",
    to: to,
    subject: "GyanGun Activation mail",
    html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
           
            <h2 style="text-align: center; text-transform: uppercase;color: rgb(37, 132, 214);">Welcome to Gyan Gun.</h2>
            Hey <strong> ${name},</strong>
            Thanks for signing up at GyanGun.   
            To complete your registration, please confirm your email <strong>${to}</strong> by clicking the following button:
            
            <div style="text-align:center">   
            <a href=${url} style="background: rgb(37, 132, 214); text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
            </div>
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    console.log(err);
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;
