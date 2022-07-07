let mouseCursor = document.querySelector(".cursor");
window.addEventListener('mousemove',cursor);

function cursor(e){
    console.log(e);
    document.querySelector(".cursor").style.top = e.pageY + "px";
    document.querySelector(".cursor").style.left = e.pageX + "px";
    // document.querySelector(".cursor").style.mixBlendMode = "difference";
}


// const body = document.querySelector("body");






const maincolor = "#fafafa";
const darkcolor = "black"


window.addEventListener("scroll",function(event){
    var scroll = this.scrollY;
    console.log(scroll);

    if(scroll>50){

        document.querySelector("html").style.backgroundColor = darkcolor;
        document.querySelector("body").style.backgroundColor = darkcolor;

        const nodeList = document.querySelectorAll("#noticestatement");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = maincolor;
}
        // document.querySelector("#noticestatement").style.color = maincolor;

    } else {
        document.querySelector("body").style.backgroundColor = null;
        const nodeList = document.querySelectorAll("#noticestatement");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.color = null;
          }
    }
})




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







// document.addEventListener('mousemove',(e) =>{

//     mouseCursor.getElementsByClassName.style.top = e.pageY + "px";
//     mouseCursor.getElementsByClassName.style.left = e.pageX + "px";
    


// })

