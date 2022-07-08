const maincolor = "#fafafa";
const darkcolor = "black"


// let mouseCursor = document.querySelector(".cursor");
// window.addEventListener('mousemove',cursor);

// function cursor(e){
//     console.log(e);
//     document.querySelector(".cursor").style.top = e.pageY + "px";
//     document.querySelector(".cursor").style.left = e.pageX + "px";
// }



const cursorRounded = document.querySelector('.cursor');


const moveCursor = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    cursorRounded.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    cursorRounded.style.display = "initial";

}

window.addEventListener('mousemove', moveCursor)




















const maincontent = document.querySelector('main');
const navsection = document.querySelector('a');
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll);

    if (scroll > 50) {

        maincontent.style.backgroundColor = "black";

        Object.values(document.body.getElementsByTagName("h1")).forEach(e => {
            e.style.color = "#fafafa"
        });

        Object.values(document.body.querySelectorAll("span,a,pre")).forEach(e => {
            e.style.color = "#fafafa"
        });
   
   
   
    } else {
        maincontent.style.backgroundColor = "#fafafa";

        Object.values(document.body.getElementsByTagName("h1")).forEach(e => {
            e.style.color = null;
        });
        Object.values(document.body.querySelectorAll("span,a,pre")).forEach(e => {
            e.style.color =null;
        });
    }
})










