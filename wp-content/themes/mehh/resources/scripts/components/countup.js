import {CountUp} from "countup.js";

export function handleCountUp() {
  const numbers = document.querySelectorAll('.numbers-module h1')

  if (!numbers.length) {
    return
  }

  numbers.forEach((number) => {
    new CountUp(number, parseInt(number.textContent),
      {
        enableScrollSpy: true,
        scrollSpyOnce: true,
        separator: '',
      })
  })
}
