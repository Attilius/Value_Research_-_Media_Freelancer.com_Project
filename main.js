const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const contentTop = document.querySelector('.content-top');
const logo = document.querySelector('.logo');
//const logo2 = document.querySelector('.logo2');
const header = document.querySelector("header");

// Boolean variables
let menuOpen = false;
let siteOpen = false;

// Sections
const intro = document.querySelector(".intro");
const mission = document.querySelector(".mission");
const portfolio = document.querySelector(".portfolio");
const management = document.querySelector(".management");
const contact = document.querySelector(".contact");


// Menu tags
const home = document.querySelector("#home");
const missionSection = document.querySelector("#missionSection");
const portfolioSection = document.querySelector("#portfolioSection");
const managementSection = document.querySelector("#managementSection");
const contactSection = document.querySelector("#contactSection");


// Menu open

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menu.style.visibility = 'visible';
        contentTop.style.display = 'none';
      //  logo1.style.display = 'none';
      //  logo2.style.display = 'block';
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.style.visibility = 'hidden';
        contentTop.style.display = 'flex';
      //  logo1.style.display = 'block';
      //  logo2.style.display = 'none';
    }
});

//Header animation

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Return home page

home.addEventListener("click", () => {
   if (!siteOpen) {
        intro.classList.add('open');
        menu.style.visibility = 'hidden';
        contentTop.style.display = 'flex';
      //  logo1.style.display = 'block';
      //  logo2.style.display = 'none';
        siteActive = true;
        menuBtn.classList.remove('open');
        menuOpen = false;
   } 
});

// Mission section

missionSection.addEventListener("click", () => {
    if (!siteOpen) {
         mission.classList.add('open');
         menu.style.visibility = 'hidden';
         contentTop.style.display = 'flex';
      //   logo1.style.display = 'block';
       //  logo2.style.display = 'none';
         siteActive = true;
         menuBtn.classList.remove('open');
         menuOpen = false;
    }
 });

// Portfolio section

 portfolioSection.addEventListener("click", () => {
    if (!siteOpen) {
         portfolio.classList.add('open');
         menu.style.visibility = 'hidden';
         contentTop.style.display = 'flex';
      //   logo1.style.display = 'block';
       //  logo2.style.display = 'none';
         siteActive = true;
         menuBtn.classList.remove('open');
         menuOpen = false;
    }
 });

// Management section

 managementSection.addEventListener("click", () => {
    if (!siteOpen) {
      management.classList.add('open');
         menu.style.visibility = 'hidden';
         contentTop.style.display = 'flex';
      //   logo1.style.display = 'block';
       //  logo2.style.display = 'none';
         siteActive = true;
         menuBtn.classList.remove('open');
         menuOpen = false;
    }
 });

 // Contact section

 contactSection.addEventListener("click", () => {
   if (!siteOpen) {
     contact.classList.add('open');
        menu.style.visibility = 'hidden';
        contentTop.style.display = 'flex';
     //   logo1.style.display = 'block';
      //  logo2.style.display = 'none';
        siteActive = true;
        menuBtn.classList.remove('open');
        menuOpen = false;
   }
});

