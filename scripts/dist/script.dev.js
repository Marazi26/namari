"use strict";

function fixedNav() {
  var nav = document.querySelector("nav");
  var socials = document.querySelector(".nav-socials");
  var scrollValue = window.scrollY;

  if (scrollValue > 600) {
    nav.style.transition = ".5s linear";
    nav.style.position = "fixed";
    nav.style.borderBottom = "1px solid #cccccc";
    nav.style.top = "0";
    nav.style.left = "1.4rem";
    nav.style.right = "1.4rem";
    nav.style.backgroundColor = "#ffffff";
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.alignItems = 'center';
    nav.style.zIndex = '0';
    nav.style.paddingBottom = '1rem';
    socials.style.color = "#cccccc";
  } else {
    nav.style.border = "none";
    nav.style.position = "static";
  }
}

window.addEventListener("scroll", fixedNav);

function menuLiColor() {
  var menuItems = document.querySelectorAll(".nav-socials");
  var scrollValue = window.scrollY;

  if (scrollValue > 600) {
    menuItems.forEach(function (item) {
      item.style.color = '#cccccc';
    });
  }
}

window.addEventListener("scroll", menuLiColor);