/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/



/* Write your implementation of greet() */

function greet(tmStrng) {

  const i = parseInt(tmStrng, 10)

  if (i < 12.00) {
    const msg = "Good Morning"
    return msg
  } else if (i > 17.00) {
    const msg = "Good Evening"
    return msg
  } else {
    const msg = "Good Afternoon"
    return msg
  }

}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

