
const correctPin = "1105";
let enteredPin = "";


function appendDigit(digit) {
  const pinInput = document.getElementById("pinInput");

  if (enteredPin.length < 4) {
    enteredPin += digit;
    pinInput.value = enteredPin; 
  }

 
  if (enteredPin.length === 4) {
    checkPin();
  }
}

function checkPin() {
  const message = document.getElementById("message");
  const pinInput = document.getElementById("pinInput");

  if (enteredPin === correctPin) {
    message.textContent = "PIN correct! Access granted.";
    message.style.color = "green";
    
   
    setTimeout(() => {
      window.location.href = "index.html"; 
    }, 1000); 

    pinInput.value = ""; 
    enteredPin = ""; 
  } else {
    message.textContent = "Incorrect PIN! Try again.";
    message.style.color = "red";
    pinInput.value = ""; 
    enteredPin = ""; 
  }
}