/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  sun = "true",
  mon = "false",
  tu = "false",
  wed = "false",
  thu = "false",
  fr = "false",
  sa = "true",
}

function isWeekend(day: Week) {
  if (day === "true") {
    return true;
  } else {
    return false;
  }
}

export { isWeekend, Week };

// import { isWeekend, Week } from "./baseTypes/7";
// const button = document.querySelector("button")!;
// const input = document.querySelector("input")!;

// if (button && input) {
//   button.addEventListener("click", () => {
//     let day = input.value;
//     console.log(isWeekend(Week[day]));
//   });
// }
