/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString){
  let this_time = timeString.split(":");
  let another_time = this_time[0].concat(this_time[1])
  let the_result = parseInt(another_time,10);
  if (the_result < 1200) {
    return "Good Morning";}
  if ((the_result >= 1200) && (the_result<= 1700)){
    return "Good Afternoon";} 
  else if (the_result >1700){
  return "Good Evening";}
  else {
    return 'TEST'
  }
}

function displayMessage(testContent){
 const msg = document.querySelector('#greeting');
 msg.innerText = testContent;
 return msg;
}