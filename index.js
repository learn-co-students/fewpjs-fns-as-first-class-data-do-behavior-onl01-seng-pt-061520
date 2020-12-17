/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet()  timeStr = to TimeString() method, parsInt = function which parses a string argument and returns as an integer */
function greet(timeStr){
  const hour = parseInt(timeStr, 10);

  if (hour <= 12) return "Good Morning"
  if (hour >= 17) return "Good Evening"
  /* like having an else statement here */
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}

