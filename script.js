var access_token = 'xyFSDSH3CvlCbEwMLK5tyUljGQ5siXpe5sy4m_3P5mPW';
var wsURI = 'wss://api.us-east.text-to-speech.watson.cloud.ibm.com/instances/443f743f-c84a-4fec-bf4c-a3d1e80be3a4/v1/synthesize'
  + '?access_token=' + access_token
  + '&voice=en-US_AllisonV3Voice';

function onOpen(evt) {
  var message = {
    text: 'Hello world',
    accept: 'audio/ogg;codecs=opus'
  };
  // The service currently accepts a single message per WebSocket connection.
  websocket.send(JSON.stringify(message));
}

var audioParts = [];
var finalAudio;

function onMessage(evt) {
  if (typeof evt.data === 'string') {
    console.log('Received string message: ', evt.data)
  } else {
    console.log('Received ' + evt.data.size + ' binary bytes', evt.data.type);
    audioParts.push(evt.data);
  }
}

function onClose(evt) {
  console.log('WebSocket closed', evt.code, evt.reason);
  finalAudio = new Blob(audioParts, {type: format});
  console.log('final audio: ', finalAudio);
}

function onError(evt) {
  console.log('WebSocket error', evt);
}

var websocket = new WebSocket(wsURI);
websocket.onopen = onOpen;
websocket.onclose = onClose;
websocket.onmessage = onMessage;
websocket.onerror = onError;
