// variabili
var burgerNameInput = document.getElementById('burger-name-input');
var sum = document.getElementById('sum');

// aggiungo l'evento al click sul bottone 'sum'
sum.addEventListener( "click",
  function () {
    // controllo se burgerNameInput è non vuoto o meno
    if (burgerNameInput != " ") {


    } else {
      alert("Inserisci il nome del tuo Burger!");
    }

  }
);
