const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const giveaway = document.querySelector(".gift__giveaway");
const deadline = document.querySelector(".gift__deadline");
const countItems = document.querySelectorAll(".gift__count-down h4");


const today = new Date();
let futureDate;

switch (today.getDay()) {
    case 1:
        futureDate = today.getTime() + 6 * 24 * 60 * 60 * 1000;
        break;
    case 2:
        futureDate = today.getTime() + 5 * 24 * 60 * 60 * 1000;
        break;
    case 3:
        futureDate = today.getTime() + 4 * 24 * 60 * 60 * 1000;
        break;
    case 4:
        futureDate = today.getTime() + 3 * 24 * 60 * 60 * 1000;
        break;
    case 5:
        futureDate = today.getTime() + 2 * 24 * 60 * 60 * 1000;
        break;
    case 6:
        futureDate = today.getTime() + 1 * 24 * 60 * 60 * 1000;
        break;
    case 0:
        futureDate = today.getTime();
        break;
    default:
        console.log('Error');

}

futureDate = new Date(futureDate);
futureDate.setHours(23, 59, 59, 999);

const year = futureDate.getFullYear();
const month = monthList[futureDate.getMonth()];
const date = futureDate.getDate();
const day = dayList[futureDate.getDay()];
const hour = ("0" + futureDate.getHours()).slice(-2);
const minute = ("0" + futureDate.getMinutes()).slice(-2);

giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year}, ${hour}:${minute}`;

function getRemainingTime() {
    const now = new Date();
    const remainingTime = futureDate.getTime() - now.getTime();

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    const days = Math.floor(remainingTime / oneDay);
    const hours = Math.floor((remainingTime % oneDay) / oneHour);
    const minutes = Math.floor((remainingTime % oneHour) / oneMinute);
    const seconds = Math.floor((remainingTime % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return "0" + item;
        }
        return item;
    }

    countItems.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (remainingTime < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4>Sorry, this giveaway has expired</h4>`
    }

}

getRemainingTime();
let countdown = setInterval(getRemainingTime, 1000);