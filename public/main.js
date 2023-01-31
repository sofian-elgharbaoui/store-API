// let initialValue = 196992000;
// let workers = 36;
// let worktime = 0;
// let today = new Date();
// let start = new Date(2023, 0, 1);
// let daysPassed = Math.floor((today - start) / (1000 * 60 * 60 * 24));
// let weekdaysPassed =
//   Math.floor((daysPassed - Math.floor(daysPassed / 7) * 2) / 5) * 5 +
//   Math.min(5, (daysPassed - Math.floor(daysPassed / 7) * 2) % 5);
// worktime = weekdaysPassed * 480;
// initialValue = worktime * workers + initialValue;

// document.addEventListener("DOMContentLoaded", function () {
//   let d = new Date();
//   let h = d.getHours();
//   let m = d.getMinutes();
//   let wd = d.getDay();
//   let workingMinutes = 0;
//   if (wd >= 1 && wd <= 5) {
//     if (h >= 8 && h <= 12) {
//       workingMinutes = (12 - h) * 60 - m;
//     } else if (h >= 13 && h <= 17) {
//       workingMinutes = (12 - 8) * 60 + (17 - h) * 60 - m;
//     }
//   }
//   initialValue += workingMinutes * workers * 30;

//   document.querySelectorAll("h1")[0].innerHTML = formatResult(initialValue);
// });

// function formatResult(result) {
//   let resultString = result.toString();
//   let resultLength = resultString.length;
//   let formattedResult = "";
//   let count = 0;

//   for (let i = resultLength - 1; i >= 0; i--) {
//     formattedResult = resultString[i] + formattedResult;
//     count++;
//     if (count == 3 && i > 0) {
//       formattedResult = "'" + formattedResult;
//       count = 0;
//     }
//   }

//   return formattedResult;
// }

// let initialValuee = 196992000;
// let workerss = 36;
// let workTimeStart = 8;
// let workTimeEnd = 17;
// let workTimeDuration = workTimeEnd - workTimeStart;
// let workdays = 5;

// let currentDate = new Date();
// let currentDay = currentDate.getDay();
// let currentHour = currentDate.getHours();
// let currentMinute = currentDate.getMinutes();

// // Calculate the number of minutes worked from Monday to Friday
// // from 8:00 to 12:00 and from 13:00 to 17:00
// let totalMinutesWorked = 0;
// if (currentDay >= 1 && currentDay <= 5) {
//   if (currentHour >= workTimeStart && currentHour < 12) {
//     totalMinutesWorked = (12 - currentHour) * 60 + (60 - currentMinute);
//   } else if (currentHour >= 12 && currentHour < 13) {
//     totalMinutesWorked = 60 - currentMinute;
//   } else if (currentHour >= 13 && currentHour < workTimeEnd) {
//     totalMinutesWorked = (workTimeEnd - currentHour) * 60 - currentMinute;
//   }
// }

// // Calculate the number of minutes worked from January 1, 2023 to yesterday
// let daysSince2023 =
//   (currentDate - new Date("2023-01-01")) / (1000 * 60 * 60 * 24);
// let workdaysSince2023 =
//   (Math.floor(daysSince2023 - (daysSince2023 % 7)) / 7) * workdays;
// let minutesWorkedSince2023 = workdaysSince2023 * workTimeDuration * 60;

// // Calculate the total number of minutes worked
// let totalMinutes = initialValuee + minutesWorkedSince2023 + totalMinutesWorked;

// // Update the total number of minutes worked every minute
// setInterval(function () {
//   totalMinutes += workerss;
// }, 60000);

// document.querySelectorAll("h1")[1].innerHTML = formatResult(initialValuee);
