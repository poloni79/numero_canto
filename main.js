let currentInput = '';
const inputField = document.getElementById('hiddenInput');
const display = document.getElementById('display');

// Nasconde il campo input
inputField.style.opacity = 0;
inputField.style.position = 'absolute';
inputField.style.zIndex = -1;

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

// Supporto per dispositivi mobili
inputField.addEventListener('input', function() {
  const key = inputField.value.slice(-1);
  handleInput(key);
  inputField.value = '';
});

// Supporto per tastiera fisica
document.addEventListener('keydown', function(event) {
  // Solo se il campo input NON ha il focus (es. al primo avvio)
  if (document.activeElement !== inputField) {
    handleInput(event.key);
    event.preventDefault(); // Previene che il tasto venga inserito nel campo
  }
});
