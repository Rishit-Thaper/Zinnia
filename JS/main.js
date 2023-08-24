//function to add Background Color to the Navbar

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("header");
    const header = document.querySelector(".home");
    const headerHeight = header.offsetHeight;
    let isNavbarTransparent = true;
  
    function updateNavbarBackground() {
      const scrollY = window.scrollY;
      const shouldNavbarBeTransparent = scrollY < headerHeight;
  
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
      navMenu.classList.remove("active");
      navMenu.style.transform = "translateY(-200px)";
    } else {
      navMenu.classList.add("active");
      navMenu.style.transform = "translateY(0)";
    }
  }
});

//Function to make Image Slideshow

const imageContainer = document.querySelector('.image-container');
const imageUrls = ["Rest/slide-banner-3.jpg", "Rest/slide-banner-2.jpg", "Rest/slide-banner-1.jpg"];
let currentImageIndex = 0;

function updateImage() {
  imageContainer.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;

  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

setInterval(updateImage, 3000); 
updateImage();



//Function to make Animation on Scroll
function animateOnScroll(elements) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach((item) => {
      observer.observe(item);
    });
}

const aboutSection = document.querySelectorAll('.about-section');
const featureSection = document.querySelectorAll('.main-grid');
const menuSection = document.querySelectorAll('.menu-grid');
const interiorSection = document.querySelectorAll('.interior-grid');
const dishesSection = document.querySelectorAll('.drink-dishes');

animateOnScroll(aboutSection);
animateOnScroll(featureSection);
animateOnScroll(interiorSection);
animateOnScroll(menuSection);
animateOnScroll(dishesSection);







