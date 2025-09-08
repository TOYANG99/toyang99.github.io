//console.log("Script loaded successfully.")

const welcomeMsg = document.querySelector('.welcome') // selects the div from the html.


const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


// doing a boolean check to see what time of day it is. Once it determines the time of day, it sets the welcome message to the appropriate greeting.

let welcomeMessage = '' // default message
if (isMorning) {
    welcomeMessage = 'Good Morning!'
}
else if (isAfternoon) {
    welcomeMessage = 'Good Afternoon!'
}
else if (isEvening) {
    welcomeMessage = 'Good Evening!'
}
welcomeMsg.textContent = welcomeMessage // sets the text of the div to the welcome message  