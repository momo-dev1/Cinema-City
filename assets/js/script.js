'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-open-btn]");
const navCloseBtn = document.querySelector("[data-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


/**
 * add Scrollbar
 */
const seriesList = document.querySelector(".series__list")
const upcomingList = document.querySelector(".upcoming__list")

const matchMediaQuery = window.matchMedia("(max-width:550px)")



function addSrollBar(matchMediaQuery) {
  if (matchMediaQuery.matches) { // If media query matches scrollbar
    seriesList.classList.add("scrollbar")
    upcomingList.classList.add("scrollbar")
  } else {
    seriesList.classList.remove("scrollbar")
    upcomingList.classList.remove("scrollbar")
  }
}


matchMediaQuery.addListener(addSrollBar)
addSrollBar(matchMediaQuery)
