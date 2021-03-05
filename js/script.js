// variabili
var burgerNameInput = document.getElementById('burger-name-input');
var buttonCalculate = document.getElementById('button-calculate');
var total = document.getElementById('total');
var ingredients = document.getElementsByClassName("ingredient");

var couponsList = ["123456", "H7F567", "897945", "458741"];
var couponInput = document.getElementById('coupon-input');


// aggiungo l'evento al click sul bottone 'sum'
buttonCalculate.addEventListener( "click",
  function () {
    var sum = 50;
    // controllo se burgerNameInput è non vuoto o meno
    if (burgerNameInput.value != "") {
      // inizializzo tutti gli elementi con la classe ingredient e li sommo alla cifra iniziale
      for (var i = 0; i < ingredients.length; i++) {

        if (ingredients[i].checked) {

          sum += parseInt(ingredients[i].value);
        }
        console.log(sum);
      }
      // applico lo sconto dei coupon
      if (couponsList.includes(couponInput.value)) {
        sum -= sum * 0.2;
        // elimino il coupon utilizzato dalla lista di coupons
        couponsList.splice(couponsList.indexOf(couponInput.value), 1);
      }
      // stampo il totale
      total.innerHTML = sum + "	\u20AC";
    } else {
      alert("Inserisci il nome del tuo Burger!");
    }
  }
);
