const timer = document.getElementById("myPar");
let second = 30;
let plusAny = document.getElementById("plus");
plusAny.addEventListener("click", function () {
  return (second = second + 1);
});
let minusAny = document.getElementById("minus");
minusAny.addEventListener("click", function () {
  return (second = second - 1);
});
let start = document.getElementById("start");
start.addEventListener("click", function () {
  return (second = 30);
  start.innerHTML = "STOP";
});
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  return (second = 0);
});

let stopWatch = setInterval(function () {
  if (second <= 0) {
    clearInterval(stopWatch);
  }
  timer.textContent = second;
  second--;
}, 1000);
