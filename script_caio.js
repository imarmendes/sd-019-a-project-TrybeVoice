const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
// const access_data = require('access_keys');
// const apikey = access_data.access_key;

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'xyFSDSH3CvlCbEwMLK5tyUljGQ5siXpe5sy4m_3P5mPW'
  }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com',
});
console.log(textToSpeech.serviceUrl)

const enviar = document.querySelector('#save');
const texto = document.querySelector('#textToTranscription');
const relacao = document.querySelector('.sinthes');

function memoriaClicavel (event) {
  console.log(event.target);
}

function criarLista () {
  const li = document.createElement('li');
  li.innerText = texto.value;
  li.classList = 'sintetizados';
  li.addEventListener('click', memoriaClicavel);
  relacao.appendChild(li);
}

function sintetizar () {
  textToSpeech
  .synthesize(params)
  .then(response => {
    const audio = response.result;
    return textToSpeech.repairWavHeaderStream(audio);
  })
  .then(repairedFile => {
    fs.writeFileSync('audio.wav', repairedFile);
    console.log('audio.wav written with a corrected wav header');
  })
  .catch(err => {
    console.log(err);
  });
}

enviar.addEventListener('click', () => {
  // sintetizar();
  relacao.style.display = 'block';
  criarLista();
});

window.onload = () => {
  const params = {
    text: `${texto.value}`,
    voice: 'en-US_AllisonVoice', // Optional voice
    accept: 'audio/wav'
  };
}
