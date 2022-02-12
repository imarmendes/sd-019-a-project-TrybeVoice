<<<<<<< HEAD
const textToTranscription = document.querySelector('#textToTranscription');
const btnSave = document.getElementById('save');

const array = [];

const saveText = () => {
  array.push(textToTranscription.value);
  textToTranscription.value = '';
=======
const textToTranscription = document.querySelector('#textToTranscription').value;
const btnSave = document.getElementById('save');

const array = [''];

function saveText() {
  array.push(textToTranscription);
>>>>>>> 2fcea7a5387853dcce571bb44e1e7056b6d8e7c0
  console.log(array);
  localStorage.setItem('textSave', array);
}

btnSave.addEventListener('click', saveText);
