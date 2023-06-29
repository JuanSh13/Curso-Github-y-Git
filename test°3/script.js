function checkGuess() {
  var guess = parseInt(document.getElementById("guessInput").value);
  var randomNumber = Math.floor(Math.random() * 10) + 1;

  if (guess === randomNumber) {
      document.getElementById("result").innerHTML = "¡Adivinaste!";
  } else {
      document.getElementById("result").innerHTML = "No es correcto. El número era " + randomNumber;
  }
}
