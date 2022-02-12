const textToTranscription = document.querySelector('#textToTranscription').value;
const btnSave = document.getElementById('save');

const array = [''];

function saveText() {
  array.push(textToTranscription);
  console.log(array);
  localStorage.setItem('textSave', array);
}

btnSave.addEventListener('click', saveText);
