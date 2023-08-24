document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("header");
    // const header = document.querySelector(".home");
    const gallery = document.querySelector(".gallery-home")
    // const headerHeight = header.offsetHeight;
    const galleryHeight = gallery.offsetHeight;
    let isNavbarTransparent = true;
  
    function updateNavbarBackground() {
      const scrollY = window.scrollY;
      const shouldNavbarBeTransparent =  scrollY < galleryHeight;
  
      if (shouldNavbarBeTransparent !== isNavbarTransparent) {
        isNavbarTransparent = shouldNavbarBeTransparent;
        requestAnimationFrame(() => {
          navbar.style.transition = "background-color 0.3s ease"; 
          navbar.style.backgroundColor = isNavbarTransparent
            ? "transparent"
            : "#44261e"; 
        });
      }
    }
    
  
  function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
  }
  
  const debouncedUpdateNavbarBackground = debounce(updateNavbarBackground, 10);
    window.addEventListener("scroll", debouncedUpdateNavbarBackground);
  });

//Function to make Navbar Responsive
document.addEventListener("click", function (event) {
  var navMenu = document.querySelector(".nav-menu");
  var toggleButton = document.querySelector(".toggle-button");

  var isToggleButton = event.target === toggleButton;
  var isMenuActive = navMenu.classList.contains("active");

  if (isToggleButton || (isMenuActive && !navMenu.contains(event.target))) {
    if (isMenuActive) {
      closeNavMenu();
    } else {
      openNavMenu();
    }
  }
});

// Function to close the navigation menu
function closeNavMenu() {
  var navMenu = document.querySelector(".nav-menu");
  navMenu.classList.remove("active");
  navMenu.style.transform = "translateY(-200px)";
}

// Function to open the navigation menu
function openNavMenu() {
  var navMenu = document.querySelector(".nav-menu");
  navMenu.classList.add("active");
  navMenu.style.transform = "translateY(0)";
}

window.addEventListener("scroll", function () {
  var isMenuActive = document.querySelector(".nav-menu").classList.contains("active");
  
  if (isMenuActive) {
    closeNavMenu();
  }
});


  function animateOnScrollRight(elements) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInRight');
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach((item) => {
      observer.observe(item);
    });
}
function animateOnScrollLeft(elements) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach((item) => {
      observer.observe(item);
    });
}

const rightOne = document.querySelectorAll('.right-one');
const leftOne = document.querySelectorAll('.left-one');
const rightTwo = document.querySelectorAll('.right-two');
const leftTwo = document.querySelectorAll('.left-two');

animateOnScrollLeft(leftOne);
animateOnScrollRight(rightOne);

animateOnScrollLeft(leftTwo);
animateOnScrollRight(rightTwo);
