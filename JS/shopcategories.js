const toggleBtn = document.getElementById("toggleBtn")
const navList = document.getElementById("navList")
const topMenuLine = document.getElementById("menuTop")
const midMenuLine = document.getElementById("menuMid")
const bottomMenuLine = document.getElementById("menuBottom")
const navBar = document.getElementById("navBar")
const backArrow = document.getElementById("backArrow")


backArrow.addEventListener("click",() =>{
    history.back();
})



toggleBtn.addEventListener("click", () =>{
   
    navList.classList.toggle("active")
    topMenuLine.classList.toggle("top-active")
    midMenuLine.classList.toggle("mid-active")
    bottomMenuLine.classList.toggle("bottom-active")
    navBar.classList.toggle("navbar-active")
})

