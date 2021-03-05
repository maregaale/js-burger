// variabili
var burgerNameInput = document.getElementById('burger-name-input');
var buttonCalculate = document.getElementById('button-calculate');
var total = document.getElementById('total');
var ingredients = document.getElementsByClassName("ingredient");
var sum = 50;
var couponsList = ["123456", "H7F567", "897945", "458741"]
// var checkList = document.getElementById('check-list');
// console.log(checkList);

// aggiungo l'evento al click sul bottone 'sum'
buttonCalculate.addEventListener( "click",
  function () {
    // controllo se burgerNameInput è non vuoto o meno
    if (burgerNameInput.value != "") {
      // inizializzo tutti gli elementi con la classe ingredient e li sommo alla cifra iniziale
      for (var i = 0; i < ingredients.length; i++) {
        if (ingredients[i].checked) {
          sum += parseInt(ingredients[i].value);
        }
      }


    } else {
      alert("Inserisci il nome del tuo Burger!");
    }

  }
);
