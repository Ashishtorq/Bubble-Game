let makeBubble = () => {
  let clutter = "";

  for (var i = 1; i <= 120; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }

  document.querySelector(".panel-bottom").innerHTML = clutter;
};
makeBubble();

let timervalue = 5;
let timer = () => {
  let timerinterval = setInterval(() => {
    if (timervalue > 0) {
      timervalue--;
      document.querySelector("#timerval").textContent = timervalue;
    } else {
      clearInterval(timerinterval);
    }
  }, 1000);
};
timer();

let gethit = () => {
  let rn = Math.floor(Math.random() * 10);
  document.querySelector("#gethit").textContent = rn;
};
gethit();
