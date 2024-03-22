const canvas = document.getElementById("myCanvas"),
toolBtns = document.querySelectorAll(".tool"),
ctx = canvas.getContext("2d");

//Global variables with default values
let isDrawing = false;
brushWidth = 5;

window.addEventListener("load", () => {
    // Setup the canvas dimensions and properties
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight
});

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath();//New path
    ctx.lineWidth = brushWidth;
}

const drawing = (e) => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY); // Creating line according to mousepointer
    ctx.stroke(); //
}

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        console.log(btn.id);
    })
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);