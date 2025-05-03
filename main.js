// Assegnazione dell' elemento 'display' selezionato nella pagina web
const display = document.getElementById('display');

// Schermata d'avvio dello script
display.innerHTML = `
  <div style="font-size: 5vw;">
    Premi due volte <br>
    una FRECCIA della<br>
    tastiera per iniziare
  </div>
`;

// Funzione per aggiornare il numero del canto
function handleInput(key) {
  // Acquisizione del numero del canto
  if (!isNaN(key) && key >= '0' && key <= '9') {
    // Acquisizione di una cifra
    if (currentInput === '0') {
      currentInput = key;
    } else {
      currentInput += key;
    }

    // Reset alla 4a cifra
    if (currentInput.length === 4) {
      display.textContent = '';
      currentInput = '';
      return;
    }

    // Reset con codice speciale '000'
    if (currentInput === '000') {
      display.textContent = '';
      currentInput = '';
      return;
    }

    // Aggiornamento del display
    const number = parseInt(currentInput, 10);
    display.textContent = number > 0 ? number.toString() : '';
  }
}

// Input da tastiera fisica (PC)
document.addEventListener('keydown', function(event) {
  // Gestione dei tasti numerici per il numero del canto
  if (event.key >= '0' && event.key <= '9') {
    handleInput(event.key);
    event.preventDefault();
  }

  // Gestione delle frecce della tastiera per l'avvio dello script
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
    currentInput = '';
    display.textContent = '___';
  }
});
