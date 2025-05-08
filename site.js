localStorage.setItem("It's a secret to everybody.", "Hasta la vista Baby.");


const hours = new Date().getHours(); 

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

let message = "";

if (isMorning) {
    message = "Good morning! Have a great day ahead!";
} else if (isAfternoon) {
    message = "Good afternoon! Hope you're having a productive day!";
} else if (isEvening) {
    message = "Good evening! Time to relax!";
}

const welcomeDiv = document.getElementById("welcome");
if (welcomeDiv) {
    welcomeDiv.textContent = message;
}
