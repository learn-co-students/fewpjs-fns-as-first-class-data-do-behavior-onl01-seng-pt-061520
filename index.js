/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
   time = timeString.split(':')
   time = parseInt(time)
  if(time < 12){
    return "Good Morning"
  }
  if(time > 12 && time < 17) {
    return "Good Afternoon"
  }
  return "Good Evening"

}
/* Write your implementation of displayMessage() */
function displayMessage (content){
  const msg = document.querySelector('#greeting');
  msg.innerText = content
  return msg;
}
