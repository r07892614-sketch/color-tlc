// Countdown Timer
let timeLeft = 60;
const timerDisplay = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerDisplay.textContent = "Time's Up!";
  }
}, 1000);

// Fade Animation
const joinBtn = document.getElementById("joinBtn");
let fade = true;
setInterval(() => {
  joinBtn.style.opacity = fade ? "0.6" : "1";
  fade = !fade;
}, 1000);

// Redirect to Telegram
joinBtn.addEventListener("click", () => {
  window.open("https://t.me/+AirZAReq26EzZWE1", "_blank");
});

