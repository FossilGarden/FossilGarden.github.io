const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const section1 = document.querySelector('#first-section');
  const section2 = document.querySelector('#second-section');
  const section3 = document.querySelector('#third-section');
  const section4 = document.querySelector('#fourth-section');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // Adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    section1.classList.add('highlight');
    section2.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    section2.classList.add('highlight');
    section1.classList.remove('highlight');
    section3.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    section3.classList.add('highlight');
    section2.classList.remove('highlight');
    section4.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 4000) {
    section4.classList.add('highlight');
    section3.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);