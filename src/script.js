const view = {
  hamburger: document.querySelector(".hamburger"),
  nav: document.querySelector(".nav"),
  navList: document.querySelector(".nav__list"),
  landingPageIcon: document.querySelector(".landing-page__icon"),
};
view.hamburger.addEventListener("click", () => {
  view.hamburger.classList.toggle("hamburger--active");
  view.navList.classList.toggle("nav__list--active");

  view.nav.classList.toggle("nav--active");
});
view.landingPageIcon.addEventListener("click", (e) => {
  console.log("icon");
});
