// Read more at http://twil.io/secure
const twilio = require('twilio');
require('dotenv').config();
const client = require("twilio")(process.env.accountSid, process.env.authToken);
const twiml = new twilio.twiml.VoiceResponse();
twiml.say('I need help. I need help. I need help, my address is 1234 Bob Street, please send help!');

client.calls.create({
  twiml: twiml.toString(),
  to: "+INSERT_PHONE_NUMBER_EXTENSION"+"INSERT_TARGET_PHONE_NUMBER", //without any extension numbers
  from: "INSERT_TWILIO_PHONE_NUMBER",
})
  .then(call => console.log(call.sid));
