// variabili
var burgerNameInput = document.getElementById('burger-name-input');
var buttonCalculate = document.getElementById('button-calculate');

// aggiungo l'evento al click sul bottone 'sum'
buttonCalculate.addEventListener( "click",
  function () {
    // controllo se burgerNameInput è non vuoto o meno
    if (burgerNameInput.value != "") {
      console.log(burgerNameInput.value);

    } else {
      alert("Inserisci il nome del tuo Burger!");
    }

  }
);
