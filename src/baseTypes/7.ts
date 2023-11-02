/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  sun,
  mon,
  tu,
  wed,
  thu,
  fr,
  sa,
}

function isWeekend(day: Week): boolean {
  const weekEnd = Week.sun || Week.sa;
  return day === weekEnd;
}

export { isWeekend, Week };

// function isWeekend(day: Week) {
//   if (day === "true") {
//     return true;
//   } else {
//     return false;
//   }
// }

// import { isWeekend, Week } from "./baseTypes/7";
// const button = document.querySelector("button")!;
// const input = document.querySelector("input")!;

// if (button && input) {
//   button.addEventListener("click", () => {
//     let day = input.value;
//     console.log(isWeekend(Week[day]));
//   });
// }
