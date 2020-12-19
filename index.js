/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const split_time = parseInt(time, 10); 
  if (split_time < 12) return "Good Morning"
  if (split_time > 17) return "Good Evening"  
  if (12 < split_time < 17) return "Good Afternoon"
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string; 

}