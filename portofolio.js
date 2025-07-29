// JavaScript Navigation page
let menuBtn = document.querySelector('.menu-btn');
let cancelBtn = document.querySelector('.cancel-btn');
let navbar = document.querySelector('.navbar');
let body = document.querySelector(' body ');


menuBtn.onclick = function() {
    menuBtn.style.opacity = '0';
    menuBtn.style.pointerEvents = 'none';
    navbar.classList.add('active');
    body.style.overflow = 'hidden';
}
cancelBtn.onclick = function() {
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
    navbar.classList.remove('active');
    body.style.overflow = 'auto';
}

// Sticky navigation menu
let val;
let nav = document.querySelector('nav');
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

let navLinks = document.querySelectorAll('.nav-menu li a');
for (var i = 0; 1 < navLinks.length; i++) {
    navLinks[i].addEventListener('click' , ()=>{
        menuBtn.style.opacity = '1';
        menuBtn.style.pointerEvents = 'auto';
        navbar.classList.remove('active');
        body.style.overflow = 'auto';
    });
}


// const nav = document.querySelector('nav');
// if (nav) { // Pastikan elemen nav ada
//     window.onscroll = function() {
//         if (window.scrollY > 20) {
//             nav.classList.add('sticky');
//         } else {
//             nav.classList.remove('sticky');
//         }
//     }
// }