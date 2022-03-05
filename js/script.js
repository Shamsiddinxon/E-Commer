// HAMBURGER MENU
let elHamburgerBtn = document.querySelector(".hamburger");
let elNavbar = document.querySelector(".header__navbar");

// hamburger menu click
elHamburgerBtn.addEventListener("click", () => {
  elNavbar.classList.toggle("active");
});
// break;
//seperated for hot deals section
//start;
let checker = false;
const m1 = document.getElementById("m1"); //light
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const m4 = document.getElementById("m4"); //light
const p1 = document.querySelector(".product_cards");
const p2 = document.querySelector(".product_cards2");

// product cards both 1 and 2
m2.addEventListener("click", (ev) => {
  m2.style.display = "none";
  m1.style.display = "block";
  m3.style.display = "block";
  m4.style.display = "none";
  p1.style.display = "grid";
  p2.style.display = "none";
  console.log(ev);
  console.log(checker);
});
m3.addEventListener("click", (ev) => {
  m2.style.display = "block";
  m1.style.display = "none";
  m3.style.display = "none";
  m4.style.display = "block";
  p1.style.display = "none";
  p2.style.display = "flex";
  console.log(ev);
  console.log(checker);
});
//pagination events starts from here go 😉 🚀🚀🚀

one.addEventListener("click", (ev) => {
  ev.target.className = "chose";
  two.className = "ordianry";
  three.className = "ordianry";
  four.className = "ordianry";
  five.className = "ordianry";
});
two.addEventListener("click", (ev) => {
  ev.target.className = "chose";
  one.className = "ordianry";
  three.className = "ordianry";
  four.className = "ordianry";
  five.className = "ordianry";
});
three.addEventListener("click", (ev) => {
  ev.target.className = "chose";
  two.className = "ordianry";
  one.className = "ordianry";
  four.className = "ordianry";
  five.className = "ordianry";
});
four.addEventListener("click", (ev) => {
  ev.target.className = "chose";
  two.className = "ordianry";
  three.className = "ordianry";
  one.className = "ordianry";
  five.className = "ordianry";
});
five.addEventListener("click", (ev) => {
  ev.target.className = "chose";
  two.className = "ordianry";
  three.className = "ordianry";
  four.className = "ordianry";
  one.className = "ordianry";
});
