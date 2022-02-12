const textToTranscription = document.querySelector('#textToTranscription');
const btnSave = document.getElementById('save');

const array = [];

const saveText = () => {
  array.push(textToTranscription.value);
  textToTranscription.value = '';
  console.log(array);
  localStorage.setItem('textSave', array);
}

btnSave.addEventListener('click', saveText);
