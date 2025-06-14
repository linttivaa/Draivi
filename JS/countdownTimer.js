const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("June 20 2025 00:00:00:00").getTime();

//Timer function with if statement fot less than 0 value
function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if (distance < 0) {
        Days.innerHTML = "0";
        Hours.innerHTML = "0";
        Minutes.innerHTML = "0";
        Seconds.innerHTML = "0";
    }
}

setInterval(timer, 1000);