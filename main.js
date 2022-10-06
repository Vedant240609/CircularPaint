canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var lastpositionofx,lastpositionofy;
var current_position_of_mouse_x, current_position_of_mouse_y
Color="blue";
width_of_line=2;
Radius=5
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
Color = document.getElementById("Color").value;
width_of_line = document.getElementById("width_of_line").value;
Radius = document.getElementById("Radius").value;
mouseevent= "mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent= "mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent= "mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop
if(mouseevent=="mousedown"){
console.log("Current position of x and y coordinates = ");
console.log("x=" + current_position_of_mouse_x +"y =" + current_position_of_mouse_y)
ctx.beginPath();
ctx.strokeStyle=Color;
ctx.lineWidth=width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, Radius ,0 , 2 * Math.PI);
ctx.stroke();
}
lastpositionofx=current_position_of_mouse_x;
lastpositionofy=current_position_of_mouse_y;
}
function Clear_drawing() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
