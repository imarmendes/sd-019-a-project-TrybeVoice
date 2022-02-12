const fs = require('fs');
const path = require('path');

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');

const { IamAuthenticator } = require('ibm-watson/auth');

const credentials = require('./apikey-ibm-cloud-tts.json');
const { buffer } = require('shelljs/src/common');

const textToConvert = 'testo convertido em voz via javascrip usando API da IBM.';

async function synthesize() {
  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: credentials.apikey,
    }),
    serviceUrl: credentials.url,
  });
  const synthesizeParams = {
    text: textToConvert,
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaV3Voice',
  }

  await textToSpeech.synthesize(synthesizeParams)
  .then(response => {
    return textToSpeech.repairWavHeaderStream(response.result);
  })
  .then(buffer =>{
    fs.writeFileSync('synthesize.wav', buffer);
  })
  .catch(err => {
    console.log('error: ', err);
  })
}

module.exports = synthesize;