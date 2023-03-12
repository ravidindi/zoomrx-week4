const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");
const meridian = document.querySelector("#meridian p");
const Day = document.querySelector(".day");

function tick() {
  const current = new Date();
  let sec = current.getSeconds();
  let min = current.getMinutes();
  let hour = current.getHours();
  let mer = "AM";
  let day = current.getDay();
  if (hour === 00) {
    hour = 12;
    mer = "AM";
  } else if (hour === 12) {
    mer = "PM";
  } else if (hour > 12) {
    hour = hour - 12;
    mer = "PM";
  }
  hours.textContent = `${hour < 10 ? `0${hour}` : hour}`;
  minutes.textContent = `${min < 10 ? `0${min}` : min}`;
  seconds.textContent = `${sec < 10 ? `0${sec}` : sec}`;
  meridian.textContent = mer;
  Day.textContent = current.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

window.addEventListener("load", (event) => {
  setInterval(tick, 1000);
});
