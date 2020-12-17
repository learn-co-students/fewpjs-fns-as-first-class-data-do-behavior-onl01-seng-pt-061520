/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(currTime){
  const currHour = parseInt(currTime, 10);
  if (currHour < 12) return "Good Morning"
  if (currHour > 12 && currHour < 17) return "Good Afternoon"
  if (currHour > 17) return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText = message;
}