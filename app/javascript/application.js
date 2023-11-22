// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const burger = document.querySelector(".burger");
const navList = document.querySelector(".navlist");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
}

const navLink = document.querySelectorAll("nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  burger.classList.remove("active");
  navList.classList.remove("active");
}