var mouse_event="empty";
var canvas= document.getElementById("my_canvas");
ctx= canvas.getContext("2d");
var color= document.getElementById("color");
var line_width = document.getElementById("line_width");
var lastX=0 , lastY=0
var draw_comp=true
function draw() {
    draw_comp=true
}
function draw_touch() {
    draw_comp=false
}


canvas.addEventListener("mousedown",my_mousedown)
    // the event listener checks if mousedown is being used or not by the user.
    // mousedown event is mapped with my_mousedown function.
    //Thus, round brackets are not used along the function
function my_mousedown(e){// (e) tells that it's  an event
        mouse_event="mousedown";
        color=document.getElementById("color").value
        line_width=document.getElementById("line_width").value
}
    
canvas.addEventListener("mouseup",my_mouseup)
    // the event listener checks if mouseup is being used or not by the user.
    // mouseup event is mapped with my_mouseup function.
    //Thus, round brackets are not used along the function
function my_mouseup(e){// (e) tells that it's  an event
        mouse_event="mouseup";
        color=document.getElementById("color").value
        line_width=document.getElementById("line_width").value
}
    
canvas.addEventListener("mouseleave",my_mouseleave)
    // the event listener checks if mouseleave is being used or not by the user.
    // mouseleave event is mapped with my_mouseleave function.
    //Thus, round brackets are not used along the function
    function my_mouseleave(e){// (e) tells that it's  an event
        mouse_event="mouseleave";
        color=document.getElementById("color").value
        line_width=document.getElementById("line_width").value
}

//if (draw==true){

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){// (e) tells that it's  an event
    if (draw_comp == false) { 
        return;
    }
    //mouse_event="mousemove";
    color = document.getElementById("color").value
    line_width = document.getElementById("line_width").value

    var curentX = e.clientX - canvas.offsetLeft
    var curentY = e.clientY - canvas.offsetTop
    console.log("Into my_mousemove: mouse_evemt=" + mouse_event);

    if (mouse_event=="mousedown"){
        color=document.getElementById("color").value
        width_of_line=document.getElementById("line_width").value
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(curentX, curentY);
        ctx.stroke();
        console.log("print");
        
        console.log("print2");
    }
    lastX=curentX; 
    lastY=curentY;
}
//}


function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)}


    var width= screen.width
    var height= screen.height

    var new_width= width-70
    var new_height= height-300
    if (width < 992){
        document.getElementById("my_canvas").width= new_width
        document.getElementById("my_canvas").height= new_height

        document.body.style.overflow="hidden";
    }


   // if (draw==false) {



   
canvas.addEventListener("touchstart", mytouchstart)

function mytouchstart(e){
    if (draw_comp == true) {
        return
    }
    
    console.log("my touch start")
    color= document.getElementById("color").value
    line_width= document.getElementById("line_width").value
    mouse_event="touchstart"
    lastX = e.touches[0].clientX-canvas.offsetLeft
    lastY = e.touches[0].clientY-canvas.offsetTop
    //lastX=0
    //lastY=0
}


canvas.addEventListener("touchmove", mytouchmove)
function mytouchmove(e){
    if (draw_comp == true) {
        return
    }
    console.log("my touch move")
    var current_touchX=e.touches[0].clientX - canvas.offsetLeft
    var current_touchY=e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=line_width
    console.log("X= "+ lastX+ ", Y= "+ lastY)
    ctx.moveTo(lastX, lastY)
    console.log("X= "+ current_touchX+ ", Y= "+ current_touchY)
    ctx.lineTo(current_touchX, current_touchY)
    ctx.stroke()
    lastX=current_touchX;
    lastY=current_touchY;
}

//}
