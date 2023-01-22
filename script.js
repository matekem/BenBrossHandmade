const toggleBtn = document.getElementById("toggleBtn")
const navList = document.getElementById("navList")
const topMenuLine = document.getElementById("menuTop")
const midMenuLine = document.getElementById("menuMid")
const bottomMenuLine = document.getElementById("menuBottom")

toggleBtn.addEventListener("click", () =>{
   
    navList.classList.toggle("active")
    topMenuLine.classList.toggle("top-active")
    midMenuLine.classList.toggle("mid-active")
    bottomMenuLine.classList.toggle("bottom-active")
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    //Set delay between automatic slide changes
    autoplay:{
      delay: 2200,
    },
  });

  swiper.setTransition(swiper,2)