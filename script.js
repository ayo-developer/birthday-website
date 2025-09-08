// 🎵 Music Button
const musicBtn = document.getElementById("musicBtn");
let audio = new Audio("Simi-Happy-Birthday-Ft-Adekunle-Gold-And-DeJa-(TrendyBeatz.com)"); // put your mp3 file in the same folder

musicBtn.addEventListener("click", () => {
  audio.play();
});

// 🎊 Confetti Effect
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiPieces = [];
for (let i = 0; i < 200; i++) {
  confettiPieces.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 6 + 4,
    d: Math.random() * 200,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 10,
    tiltAngleIncrement: Math.random() * 0.07 + 0.05,
    tiltAngle: 0
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.lineWidth = p.r / 2;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confettiPieces.forEach(p => {
    p.tiltAngle += p.tiltAngleIncrement;
    p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
    p.tilt = Math.sin(p.tiltAngle - p.d / 3) * 15;

    if (p.y > confettiCanvas.height) {
      p.x = Math.random() * window.innerWidth;
      p.y = -20;
    }
  });
}

setInterval(drawConfetti, 20);

// 🎂 Countdown to next birthday
function countdown() {
  const nextBirthday = new Date("2025-12-08T00:00:00"); // <-- change to Ayomide's real birthday
  const now = new Date();
  const diff = nextBirthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "🎉 Today is Ayomide’s Birthday! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s until Ayomide’s birthday!`;
}

setInterval(countdown, 1000);
countdown();
