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
