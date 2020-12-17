/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  const timeString = parseInt(string, 10)
  if(timeString < 12) return "Good Morning"
  if(timeString > 17) return "Good Evening"
  return "Good Afternoon"
}
greet()
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let content = document.getElementById('greeting').innerText = string
}