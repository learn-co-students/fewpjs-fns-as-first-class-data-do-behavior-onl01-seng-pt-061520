/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time_str) {
  time = time_str.split(':')
  time = parseInt(time)
  if (time < 12) {
    return "Good Morning"
  }
  if (time > 12 && time < 17) {
    return "Good Afternoon"
  }
  return "Good Evening"
}

/* Write your implementation of displayMessage() */
function displayMessage(phrase) {
  let greeting = document.getElementById("greeting")
  greeting.innerText = phrase
}
