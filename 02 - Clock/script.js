// Get elements
const secondHand = document.querySelector("div.sec-hand");
const minuteHand = document.querySelector("div.min-hand");
const hourHand = document.querySelector("div.hour-hand");

function setTime() {
    // Get time
    const time = new Date();

    // Seconds Hand
    const seconds = time.getSeconds();
    const secondsDegree = 6 * seconds;

    // Verify angle and remove/add transition
    secondsDegree == 0 ? secondHand.style.transition = `unset` : secondHand.style.transition = `all .1s ease`;

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    secondHand.style.transform += `translate(-50%)`;

    // Minutes Hand
    const minutes = time.getMinutes();
    const minutesDegree = 6 * minutes + (0.1 * seconds);

    // Verify angle and remove/add transition
    minutesDegree == 0 ? minuteHand.style.transition = `unset` :  minuteHand.style.transition = `all .1s ease`;

    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    minuteHand.style.transform += `translate(-50%)`;

    // Hours Hand
    const hours = time.getHours();
    const hourDegree = 30 * hours + (.5 * minutes);

    // Verify angle and remove/add transition
    secondsDegree == 0 ? hourHand.style.transition = `unset` : hourHand.style.transition = `all .1s ease`;;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    hourHand.style.transform += `translate(-50%)`;
}

// Repeat function every 1000ms
setInterval(setTime, 1000);

// Start Clock
setTime();