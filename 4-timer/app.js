"use strict";

const h1 = document.querySelector(".h1");

const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);

const rtf = new Intl.RelativeTimeFormat("ru-RU", {
  numeric: "auto",
  style: "long",
});
setInterval(() => {
  const dayFor = newYearDate - new Date();
  const seconds = Math.floor((dayFor / 1000) % 60);
  const minutes = Math.floor((dayFor / (1000 * 60)) % 60);
  const hours = Math.floor((dayFor / (1000 * 60 * 60)) % 24);
  const totalDays = Math.floor(dayFor / (1000 * 60 * 60 * 24));
  let months = 0;
  let days = totalDays;
  while (days >= 30) {
    months++;
    days -= 30;
  }
  const resArr = [];
  if (months > 0) {
    resArr.push(rtf.format(-months, "month").replace(" назад", ""));
  }
  if (days > 0) {
    resArr.push(rtf.format(-days, "day").replace(" назад", ""));
  }
  if (hours > 0) {
    resArr.push(rtf.format(-hours, "hour").replace(" назад", ""));
  }
  if (minutes > 0) {
    resArr.push(rtf.format(-minutes, "minute").replace(" назад", ""));
  }
  if (seconds > 0) {
    resArr.push(rtf.format(-seconds, "second").replace(" назад", ""));
  }
  h1.textContent = `До нового года осталось: ${resArr.join(", ")}`;
}, 1000);
