const itemShop = document.getElementById("itemShop");
const imageContainer = document.getElementById("imgContainer")
const toggleBtn = document.getElementById("toggleBtn")
const navList = document.getElementById("navList")
const topMenuLine = document.getElementById("menuTop")
const midMenuLine = document.getElementById("menuMid")
const bottomMenuLine = document.getElementById("menuBottom")
const navBar = document.getElementById("navBar")

toggleBtn.addEventListener("click", () =>{
   
    navList.classList.toggle("active")
    topMenuLine.classList.toggle("top-active")
    midMenuLine.classList.toggle("mid-active")
    bottomMenuLine.classList.toggle("bottom-active")
    navBar.classList.toggle("navbar-active")
})
let imageArray = []
function fillImageArray(imageArray){
    imageArray.push("Images/img1.jpg")
    imageArray.push("Images/img2.jpg")
    imageArray.push("Images/img3.jpg")
    //imageArray.push("Images/img4.jpg")
    imageArray.push("Images/img5.jpg")
    imageArray.push("Images/img6.jpg")
    imageArray.push("Images/img7.jpg")

    return imageArray
}
    fillImageArray(imageArray)

