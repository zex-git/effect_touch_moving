var canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#ff000";
ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
canvas.width = String(window.innerWidth);
canvas.height = String(window.innerHeight-4);



let pi = Math.PI;
let r = 15;
ctx.strokeStyle = "#ffff00";
ctx.lineWidth = 5;
let isTouch = true;
handleTMove({"touches" : [{"clientX" : 50, "clientY" : 90}]});

//function handleTStart() {}
//function handleTEnd() {}
//andleTStartventListener("touchstart", handleTStart);
//canvas.addEventListener("touchend", handleTEnd);
document.addEventListener("touchmove", handleTMove);



function handleTMove(e) {
  if (isTouch) {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    ctx.beginPath();
    ctx.arc(e.touches[0].clientX, e.touches[0].clientY, r, 0, 2 * pi);
    console.log(e.touches[0]);
    ctx.stroke();
  }
}
