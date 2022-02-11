/* const axios = require('axios'); */

const URL = "https://api.us-east.text-to-speech.watson.cloud.ibm.com/instances/443f743f-c84a-4fec-bf4c-a3d1e80be3a4/v1/synthesize";

const test = async () => {
  const response = await axios.post(URL, { 
    text: 'Hi, we try to learn',
    output: 'hello_world2.wav'
  }, {
    headers: {
      Authorization: 'eyJraWQiOiIyMDIyMDExNjA4MjIiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLTAwNGQxNjdlLWRhNzItNGUzZS1hMzdmLWZmMTdhZjg4NjIzZCIsImlkIjoiaWFtLVNlcnZpY2VJZC0wMDRkMTY3ZS1kYTcyLTRlM2UtYTM3Zi1mZjE3YWY4ODYyM2QiLCJyZWFsbWlkIjoiaWFtIiwianRpIjoiOTcyZTFmY2EtNzA0Ni00ZmViLTk2YTktODZkMzNiYjNlYzFhIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC0wMDRkMTY3ZS1kYTcyLTRlM2UtYTM3Zi1mZjE3YWY4ODYyM2QiLCJuYW1lIjoiQXV0by1nZW5lcmF0ZWQgc2VydmljZSBjcmVkZW50aWFscyIsInN1YiI6IlNlcnZpY2VJZC0wMDRkMTY3ZS1kYTcyLTRlM2UtYTM3Zi1mZjE3YWY4ODYyM2QiLCJzdWJfdHlwZSI6IlNlcnZpY2VJZCIsInVuaXF1ZV9pbnN0YW5jZV9jcm5zIjpbImNybjp2MTpibHVlbWl4OnB1YmxpYzp0ZXh0LXRvLXNwZWVjaDp1cy1lYXN0OmEvZDdlMjQ0ZWIyMDZhNDM3Yzk3OTljZmIwNTAzYTA5MDQ6NDQzZjc0M2YtYzg0YS00ZmVjLWJmNGMtYTNkMWU4MGJlM2E0OjoiXSwiYXV0aG4iOnsic3ViIjoiU2VydmljZUlkLTAwNGQxNjdlLWRhNzItNGUzZS1hMzdmLWZmMTdhZjg4NjIzZCIsImlhbV9pZCI6ImlhbS1TZXJ2aWNlSWQtMDA0ZDE2N2UtZGE3Mi00ZTNlLWEzN2YtZmYxN2FmODg2MjNkIiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJuYW1lIjoiQXV0by1nZW5lcmF0ZWQgc2VydmljZSBjcmVkZW50aWFscyJ9LCJhY2NvdW50Ijp7ImJvdW5kYXJ5IjoiZ2xvYmFsIiwidmFsaWQiOnRydWUsImJzcyI6ImQ3ZTI0NGViMjA2YTQzN2M5Nzk5Y2ZiMDUwM2EwOTA0IiwiZnJvemVuIjp0cnVlfSwiaWF0IjoxNjQ0NTkwODA1LCJleHAiOjE2NDQ1OTQ0MDUsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.eS4n6QkTHCiXPlFmFEM3_pJ8qUy0zohWGy0hZa5DPj72kN0fJALagvw53Cu0WozhyGGybC4QS0TUv6xIZbaYP73leHVoClkffv8rZJY_pEnO2hq-uhYwpOwvpf6CO3fNiV-e3OYC7t1_ZwKfhtouZbSlWBFsT_0aj4q8FxdKj5hdy6IjvSLbx-dNvWbvphsEUWxiRss8T3Tkc5L1uqQxysQhuvctVTCucIlBPvct0RzDrcnXwCqx8EjaYM0Ay-R9vfELi_9P7sjOticOVtNwXbmyqJM68P7YabUb62Q-f57G64gn-AR9hZ7NDo5hkonVpRoM3etl-lAiDCNPTuTy9Q',
      'Content-Type': 'application/json',
      Accept: 'audio/wav',
      'Access-Control-Allow-Origin': '*'
    }
  })

  console.log(response);
}

test();
/* 
curl -X POST -u "apikey:xyFSDSH3CvlCbEwMLK5tyUljGQ5siXpe5sy4m_3P5mPW" --header "Content-Type: application/json" --header "Accept: audio/wav" --data "{\"text\":\"hello world\"}" --output hello_world2.wav "https://api.us-east.text-to-speech.watson.cloud.ibm.com/instances/443f743f-c84a-4fec-bf4c-a3d1e80be3a4/v1/synthesize"
 */