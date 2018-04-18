const secondHand = document.querySelector("div.sec-hand");

function setTime() {
    const time = new Date();


    const seconds = time.getSeconds();
    const secondsDegree = 6 * seconds;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}

setInterval(setTime, 1000);