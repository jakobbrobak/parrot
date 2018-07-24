const alexa = require('alexa-app'); // Henter/anvender framework

const app = new alexa.app('parrot'); // Angiver/opretter vores app (Navnet for app'en angives i parantesen)

app.launch((req, res) => {
  res.say('I am a parrot.');
});

app.intent('RepeatIntent', {
  slots: {VALUE: 'AMAZON.NUMBER'},
  utterances: ['repeat {-|VALUE}', 'to repeat {-|VALUE}']
}, (req, res) => {
  const value = req.slot('VALUE') || 2;

  res.say(`You said ${value}.`);
  for (let i = 0; i < value; i++) {
    res.say(`I repeat, you said ${value}.`);
  }

  module.exports = app;
});