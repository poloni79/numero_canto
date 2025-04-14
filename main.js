let currentInput = '';
const inputField = document.getElementById('hiddenInput');
const display = document.getElementById('display');

// Funzione per aggiornare il display
function handleInput(key) {
  if (!isNaN(key) && key >= '0' && key <= '9') {
    currentInput += key;

    if (currentInput.length > 3) {
      currentInput = currentInput.slice(-3);
    }

    if (currentInput === '000') {
      display.textContent = '';
      currentInput = '';
    } else {
      const number = parseInt(currentInput, 10);
      display.textContent = number > 0 ? number.toString() : '';
    }
  }
}

// Input da tastiera virtuale (mobile)
inputField.addEventListener('input', function() {
  const key = inputField.value.slice(-1);
  handleInput(key);
  inputField.value = '';
});

// Input da tastiera fisica (PC)
document.addEventListener('keydown', function(event) {
  if (document.activeElement !== inputField) {
    handleInput(event.key);
    event.preventDefault();
  }
});

// Attiva il campo input su tap per mostrare la tastiera
document.body.addEventListener('click', () => {
  inputField.focus();
});
document.body.addEventListener('touchstart', () => {
  inputField.focus();
});