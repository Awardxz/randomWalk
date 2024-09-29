const canvas = document.getElementById("awardcanvas");
const ctx = canvas.getContext("2d");
const time = document.querySelector(".time");

let x = canvas.width / 2;
let y = canvas.height / 2;
const stepSize = 5;

function randomWalk() {
  ctx.strokeStyle = "#ffffff";
  ctx.strokeWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);

  const direction = Math.floor(Math.random() * 4);
  switch (direction) {
    case 0:
      y -= stepSize;
      break;
    case 1:
      y += stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      x += stepSize;
      break;
  }

  if (x < 0) x = 0;
  if (x > canvas.width - 5) x = canvas.width - 5;
  if (y < 0) y = 0;
  if (y > canvas.height - 5) y = canvas.height - 5;

  ctx.lineTo(x, y);
  ctx.stroke();

  requestAnimationFrame(randomWalk);
}

randomWalk();
