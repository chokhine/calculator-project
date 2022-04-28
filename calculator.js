let display = document.querySelector("#display");
let button = document.querySelectorAll("button");
let buttons = Array.from(button);
buttons.map((v) => {
  v.addEventListener("click", calc);
});

function calc(e) {
  let val = e.target.innerText;
  let v = e.target;
  switch (val) {
    case "AC":
      display.innerText = "";
      break;
    case "Del":
      display.innerText = display.innerText.slice(0, -1);
      break;
    case "x²":
      display.innerText = `${display.innerText} ** ${2}`;
      break;
    case "=":
      try {
        if (display.innerText === "") {
          display.innerText = "";
        } else {
          let aa = eval(display.innerText);
          display.innerText = aa;

          // display.innerText = `${display.innerText} = ${aa}`;
        }
      } catch (e) {
        display.innerText = "ERROR !!";
        setTimeout(dis, 1000);
      }
      break;
    default:
      display.innerText += val;
  }
}
// _____________________________________

let date = document.querySelector(".date");
let day = document.querySelector(".day");
let dd = new Date();

let da = dd.getDate();
let mm = dd.getMonth();
let yy = dd.getFullYear();

date.innerText = ` ${da} / ${mm + 1} / ${yy}`;

let days = [
  "Sunady",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturaday",
];
day.innerText = days[mm];
// ------------------------------------------

setTimeout(dis, 2000);

function dis() {
  display.innerText = "";
}
