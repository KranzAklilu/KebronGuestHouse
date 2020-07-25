const view = {
  header: document.querySelector(".header"),
  hamburger: document.querySelector(".hamburger"),
  nav: document.querySelector(".nav"),
  navList: document.querySelector(".nav__list"),
  landingPageImgContainer: document.querySelector(
    ".landing-page__img-container"
  ),
  caerousel: document.querySelectorAll(".fa-circle"),

  img: document.querySelectorAll(".landing-page__img"),
  landingPageIcon: document.querySelector(".landing-page__icon"),
  descLink: document.querySelectorAll(".description__link"),
  card: document.querySelectorAll(".description__card"),
};

window.onscroll = () => {
  if (window.scrollY >= 30) {
    view.header.classList.add("fixed");
  } else {
    view.header.classList.remove("fixed");
  }
};

view.hamburger.addEventListener("click", () => {
  view.hamburger.classList.toggle("hamburger--active");
  view.navList.classList.toggle("nav__list--active");

  view.nav.classList.toggle("nav--active");
});
view.landingPageIcon.addEventListener("click", (e) => {
  const img = [...view.img];
  const caerousel = [...view.caerousel];
  const activeImg = img.find((img) =>
    img.classList.contains("landing-page__img--active")
  );

  if (e.target.classList.contains("left")) {
    activeImg.classList.remove("landing-page__img--active");
    let current =
      activeImg.previousElementSibling ||
      view.landingPageImgContainer.lastElementChild;
    current.classList.add("landing-page__img--active");
  } else if (e.target.classList.contains("right")) {
    activeImg.classList.remove("landing-page__img--active");
    let current =
      activeImg.nextElementSibling ||
      view.landingPageImgContainer.firstElementChild;
    current.classList.add("landing-page__img--active");
  }
});
view.descLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const allLinks = [...view.descLink];
    const activeLink = allLinks.find((item) =>
      item.classList.contains("description__link--active")
    );
    activeLink.classList.remove("description__link--active");
    e.target.classList.add("description__link--active");

    const id = e.target.dataset.id;
    const card = [...view.card];
    const activeCard = card.find((item) => item.dataset.id === id);
    if (!activeCard.classList.contains("description__card--active")) {
      card.forEach((card) => {
        card.classList.remove("description__card--active");
      });
      activeCard.classList.add("description__card--active");
    }
  });
});
