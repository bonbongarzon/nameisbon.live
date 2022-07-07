// const top = document.querySelector(".top");
// const bottom = document.querySelector(".bottom");


// window.addEventListener("scroll",function(event){
//     var scroll = this.scrollY;
//     console.log(scroll);

//     if(scroll>350){
//         bottom.style.backgroundColor = "black";
//     } else {
//         bottom.style.backgroundColor = "white";
//     }
// })




let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');
window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX +  "px";
}


// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;")
// })