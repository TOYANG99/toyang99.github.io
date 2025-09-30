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

localStorage.setItem("It's a secret to everybody.", "Sorry - I'm not sure where this reference is from!")

//Note to self -- carosul assignment code below.
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()
const nButton = document.querySelector('#next') 
const pButton = document.querySelector('#prev')

nButton.addEventListener('click', () => { // Eventlisnter for the next button. goes forwards through the images.
    currentImage++;
    showImages()
})

pButton.addEventListener('click', () => { // Eventlisnter for the previous button. goes back through the images.
    currentImage--;
    showImages()
})

setTimeout(() => { // After 5 seconds , will rotate to the next image ONCE.
  currentImage++;
  showImages();
}, 5000);

setInterval(() => { // Every 5 seconds, the images will automatically rotate.
  currentImage++;
  showImages();
}, 5000);
