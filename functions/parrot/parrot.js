const alexa = require('alexa-app'); // Henter/anvender framework

const app = new alexa.app('parrot'); // Angiver/opretter vores app (Navnet for app'en angives i parantesen)

app.launch((req, res) => {
  res.say('I am a parrot.');
});

module.exports = app;