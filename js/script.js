// Toogle class active
const navbarNav = document.querySelector('.navbar-nav');

// Hambuerger menu on click
document.querySelector('#hamburger').onclick = () => {
  navbarNav.classList.toggle('active');
};

// click diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

const myslide = document.querySelectorAll('.myslide'),
  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(e) {
  counter += e;
  slidefun(counter);
  resetTimer();
}
function currentSlide(e) {
  counter = e;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 3000);
}

function slidefun(e) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' active', '');
  }
  if (e > myslide.length) {
    counter = 1;
  }
  if (e < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = 'block';
  dot[counter - 1].className += ' active';
}
