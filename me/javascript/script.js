
const updateContentButton = document.getElementById("update-content");
const dynamicText = document.getElementById("dynamic-text");

const updateImageButton = document.getElementById("update-image");
const dynamicImage = document.getElementById("dynamic-image");

const dayMessage = document.getElementById("day-message");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


updateContentButton.addEventListener("click", () => {
  dynamicText.textContent = "From the very first time I encountered quantum physics in high school, it has been a profound source of motivation and inspiration for me. The subject opened up an entirely new way of looking at the universe, challenging the boundaries of what I thought was possible and igniting a deep curiosity to understand the mysteries of reality on a fundamental level.";
});

updateImageButton.addEventListener("click", () => {
  dynamicImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_53r7B_b7qQ288opt_9DLcp83XvsdZXa1wOdC5NBA4ZYM2_6C5ykiX8DtPA&s";
  dynamicImage.alt = "Quantum Advances";
  dynamicImage.style.border = "3px solid green"; 
});


const today = new Date().getDay(); 
let dayMessageText = "";

if (today === 0) {
  dayMessageText = "Sunday: A perfect day to ponder the mysteries of the universe.";
} else if (today === 1) {
  dayMessageText = "Monday: Start your week with a new quantum insight.";
} else if (today === 2) {
  dayMessageText = "Tuesday: Explore the duality of waves and particles.";
} else if (today === 3) {
  dayMessageText = "Wednesday: Midweek—time for deep theoretical thinking.";
} else if (today === 4) {
  dayMessageText = "Thursday: Reflect on the beauty of quantum entanglement.";
} else if (today === 5) {
  dayMessageText = "Friday: screw it i need a break.";
} else if (today === 6) {
  dayMessageText = "Saturday: Dive into quantum computing and its future.";
} else {
  dayMessageText = "Unknown day: Is this a quantum glitch?";
}

dayMessage.textContent = dayMessageText;

