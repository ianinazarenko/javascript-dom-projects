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

let futureDate = new Date();
// futureDate.setDate(futureDate.getDate() + 7);
const year = futureDate.getFullYear();
const month = monthList[futureDate.getMonth()];
const date = futureDate.getDate();
const day = dayList[futureDate.getDay()];
const hour = ("0" + futureDate.getHours()).slice(-2);
const minute = ("0" + futureDate.getMinutes()).slice(-2);

console.log(futureDate);

giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year}, ${hour}:${minute}`;
