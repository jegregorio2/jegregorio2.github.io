// script.js

// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
};

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');

navLinks.forEach((l) => {
  l.addEventListener('click', () => {
    new bootstrap.Collapse(menuToggle).toggle()
  })
});

// click function to add/remove class active
function makeActive(e) {
  var elems = document.querySelectorAll('.active');
  [].forEach.call(elems, function (el) {
    el.classList.remove('active');
  });
  e.target.className = 'active';
}

// click function to add/remove class active on Logo
function backHome(e) {
  var elems = document.querySelectorAll('.active');
  [].forEach.call(elems, function (el) {
    el.classList.remove('active');
  });
  // e.target.className = 'active';
}