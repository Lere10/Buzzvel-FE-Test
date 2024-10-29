import ScrollReveal from "scrollreveal";

const rev = ScrollReveal({ reset: true });

//HEADER REVEALS

rev.reveal(".header__title", {
  duration: 1500,
  distance: "90px",
  origin: "left",
});
rev.reveal(".header__subtitle", {
  duration: 1500,
  distance: "90px",
  origin: "left",
  delay: 150,
});
rev.reveal(".header__button", {
  duration: 1500,
  distance: "90px",
  origin: "left",
  delay: 250,
});
rev.reveal(".header__quote-content", {
  duration: 1500,
  distance: "90px",
  origin: "left",
  delay: 500,
});
rev.reveal(".header__backgroundImage", {
  duration: 1500,
  distance: "90px",
  origin: "right",
});

//PICKTHESUN REVEAL

rev.reveal(".pickthesun__pretitle", {
  duration: 2500,
  distance: "50px",
  origin: "bottom",
});
rev.reveal(".pickthesun__title", {
  duration: 2500,
  distance: "50px",
  origin: "bottom",
  delay: 50,
});
rev.reveal(".pickthesun__main-text", {
  duration: 2500,
  distance: "50px",
  origin: "bottom",
  delay: 100,
});
rev.reveal(".pickthesun__main-image", {
  duration: 3000,
  distance: "50px",
  origin: "bottom",
  delay: 150,
});

//SERVICES

rev.reveal(".services__placeholderimg", {
  duration: 3000,
  distance: "50px",
  origin: "left",
});
rev.reveal(".services__grid-pretitle", {
  duration: 2000,
  distance: "50px",
  origin: "right",
  delay: 500,
});
rev.reveal(".services__grid-title", {
  duration: 2000,
  distance: "50px",
  origin: "right",
  delay: 500,
});
rev.reveal(".services__grid-main-text", {
  duration: 2000,
  distance: "50px",
  origin: "right",
  delay: 500,
});

rev.reveal(".services__grid-1", {
  duration: 1000,
  distance: "50px",
  origin: "right",
  delay: 500,
});
rev.reveal(".services__grid-2", {
  duration: 2000,
  distance: "50px",
  origin: "right",
  delay: 500,
});
rev.reveal(".services__grid-3", {
  duration: 3000,
  distance: "50px",
  origin: "right",
  delay: 500,
});
rev.reveal(".services__grid-4", {
  duration: 4000,
  distance: "50px",
  origin: "right",
  delay: 500,
});

//FEATURES

rev.reveal(".features__placeholderimg", {
  duration: 3000,
  distance: "50px",
  origin: "right",
});
rev.reveal(".features__grid-pretitle", {
  duration: 2000,
  distance: "50px",
  origin: "left",
});
rev.reveal(".features__grid-title", {
  duration: 2000,
  distance: "50px",
  origin: "left",
});
rev.reveal(".features__grid-main-text", {
  duration: 2000,
  distance: "50px",
  origin: "left",
});

rev.reveal(".features__grid-1", {
  duration: 1000,
  distance: "50px",
  origin: "left",
  delay: 500,
});
rev.reveal(".features__grid-2", {
  duration: 2000,
  distance: "50px",
  origin: "left",
  delay: 500,
});
rev.reveal(".features__grid-3", {
  duration: 3000,
  distance: "50px",
  origin: "left",
  delay: 500,
});
rev.reveal(".features__grid-4", {
  duration: 4000,
  distance: "50px",
  origin: "left",
  delay: 500,
});

//QUOTES

rev.reveal(".quotes__infos", {
  duration: 2000,
  distance: "50px",
  origin: "bottom",
});
rev.reveal(".quotes__button", {
  duration: 2000,
  distance: "50px",
  origin: "bottom",
  delay: 500,
});
rev.reveal(".quotes__cards", {
  duration: 2000,
  distance: "50px",
  origin: "bottom",
  delay: 500,
});
rev.reveal(".quotes__buttons", {
  duration: 3000,
  distance: "50px",
  origin: "bottom",
  delay: 500,
});

//GETTHESUN

rev.reveal(".getthesun__header-title", {
  duration: 2000,
  distance: "50px",
  origin: "bottom",
});
rev.reveal(".getthesun__button", {
  duration: 2000,
  distance: "50px",
  origin: "bottom",
  delay: 500,
});
rev.reveal(".getthesun__button-info", {
  duration: 2000,
  distance: "50px",
  origin: "bottom",
  delay: 500,
});
rev.reveal(".getthesun__macimg", {
  duration: 2000,
  distance: "50px",
  origin: "bottom",
  delay: 500,
});

export default rev;
