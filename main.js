const clockEl = document.getElementById("clock");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const periodEl = document.getElementById("period");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const greetingEl = document.getElementById("greeting");
const formatToggle = document.getElementById("formatToggle");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pad = (n) => (n < 10 ? "0" + n : n);

let is12Hour = localStorage.getItem("clockFormat") === "12";
updateToggleLabel();

function getGreeting(hour) {
    if (hour < 5) return "Good Night";
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 21) return "Good Evening";
    return "Good Night";
}

function updateClock() {
    const now = new Date();
    const rawHours = now.getHours();

    let displayHours = rawHours;
    let period = "";

    if (is12Hour) {
        period = rawHours >= 12 ? "PM" : "AM";
        displayHours = rawHours % 12 || 12;
        periodEl.textContent = period;
        periodEl.classList.remove("hidden");
    } else {
        periodEl.classList.add("hidden");
    }

    hoursEl.textContent = pad(displayHours);
    minutesEl.textContent = pad(now.getMinutes());
    secondsEl.textContent = pad(now.getSeconds());

    greetingEl.textContent = getGreeting(rawHours);
    dayEl.textContent = days[now.getDay()];
    dateEl.textContent = `${pad(now.getDate())} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

function updateToggleLabel() {
    formatToggle.textContent = is12Hour ? "12H" : "24H";
}

formatToggle.addEventListener("click", () => {
    is12Hour = !is12Hour;
    localStorage.setItem("clockFormat", is12Hour ? "12" : "24");
    updateToggleLabel();
    updateClock();
});

updateClock();
setInterval(updateClock, 1000);
