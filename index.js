/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeString) {
  let t = timeString.split(':')
  let i = parseInt(t)
  if (i < 12) {
    return "Good Morning"
  }
  if (i > 12 && i < 17) {
    return "Good Afternoon"
  }
  return "Good Evening"
}

/* Write your implementation of displayMessage() */

function displayMessage(phrase) {
  let greet = document.getElementById("greeting")
  greet.innerText = phrase
}


