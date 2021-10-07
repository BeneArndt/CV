/*menu show and hidden*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navToggleIcon = document.getElementById('nav-toggle-icon')
/*show menu*/
  navToggle.addEventListener('click',() =>{
    toggleMenu();
  })

/*hide menu*/

function toggleMenu(){
  if(navMenu.className == "show-menu"){
    navMenu.className = "remove-menu";
    navToggleIcon.classList.remove('uil-times');
    navToggleIcon.classList.add('uil-apps');
  }else{
    navMenu.className  = "show-menu";
    navToggleIcon.classList.add('uil-times');
    navToggleIcon.classList.remove('uil-apps');
  }
}
/* skills menu */
const skillContent = document.getElementsByClassName('skills_content'),
skillsHeader = document.querySelectorAll('.skills_header')
function toggleSkills(){

  let itemclass = this.parentNode.className

  for(i = 0; i < skillContent.length; i++){
    skillContent[i].className = 'skills_content skills_close'
  }
  if(itemclass == 'skills_content skills_close'){
    this.parentNode.className = 'skills_content skills_open'
  }
}
skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})

/* qualification menu */
const tabs = document.querySelectorAll('[data-target]'),
      tabsContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabsContents.forEach(tabContent => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})
/*swiper JS */
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});