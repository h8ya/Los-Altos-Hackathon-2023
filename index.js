const externalip = require('external-ip')();
const twilio = require('twilio');
require('dotenv').config();

// Create a Twilio client with your account credentials
const client = new twilio(process.env.accountSid, process.env.authToken);

// Get the user's external IP address
externalip((err, ip) => {
  if (err) {
    console.log(err);
  } else {

    // Format the IP address with spaces and "dot" spelling for each segment
    const formattedIP = ip.replace(/\./g, ' dot ').replace(/\d/g, '$& ').trim();
    //const formattedIP = ip.replace(/\./g, ' dot ');

    // Create a TwiML response with the formatted IP address embedded in the message
    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say(process.env.message +` My IP address is ${formattedIP}`);

    // Initiate a Twilio call using the TwiML response
    client.calls.create({
      twiml: twiml.toString(),
  to: process.env.targetNumber, //without any extension numbers or with it, edit code to accomodate
  from: process.env.twilioNum,
})
      .then(call => console.log(call.sid, `\nUser IP: ${ip}`));
  }
});
