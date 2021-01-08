/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
 
function greet(timeString){
  let timenew = parseInt(timeString)

  if (timenew < 12 ){
    return "Good Morning"   
  } else if (timenew = 12 || (timenew >12 && timenew < 17)){
    return "Good Afternoon"
  } else if (timenew > 17 ){
    return "Good Evening"
  }
  }
/* Write your implementation of displayMessage() */

function displayMessage(message){
  document.getElementById("greeting").innerText = message

}