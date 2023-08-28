let makeBubble = () => {
  let clutter = "";

  for (var i = 1; i <= 120; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }

  document.querySelector(".panel-bottom").innerHTML = clutter;
};




let timervalue = 60; // Initial value
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




let hitRn;
let gethit = () => {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#gethit").textContent = hitRn;
};





let score = 0; // Initial value
let getScore = () => {
  score = score + 10;
  document.querySelector("#scorevalue").textContent = score;
};




document
  .querySelector(".panel-bottom")
  .addEventListener("click", function (details) {
    // alert("its working")
    let clickedNum = Number(details.target.textContent);
    if (clickedNum === hitRn) {
      getScore();
      makeBubble();
      gethit();
    }
  });

timer();
