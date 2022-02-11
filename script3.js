const shell = require('shelljs');
const obj = JSON.stringify({ text:"hello world" });
const curl = 'curl -X POST -u "apikey:xyFSDSH3CvlCbEwMLK5tyUljGQ5siXpe5sy4m_3P5mPW" --header "Content-Type: application/json" --header "Accept: audio/wav" --data "\{\"text\":\"hello world\"\}" --output hello_world2.wav "https://api.us-east.text-to-speech.watson.cloud.ibm.com/instances/443f743f-c84a-4fec-bf4c-a3d1e80be3a4/v1/synthesize"'

//esse funciona
/* curl -X POST -u "apikey:xyFSDSH3CvlCbEwMLK5tyUljGQ5siXpe5sy4m_3P5mPW" --header "Content-Type: application/json" --header "Accept: audio/wav" --data "{\"text\":\"hello world\"}" --output hello_world2.wav "https://api.us-east.text-to-speech.watson.cloud.ibm.com/instances/443f743f-c84a-4fec-bf4c-a3d1e80be3a4/v1/synthesize" */

shell.exec(curl);