import "./main.css";
import Card from "./components/Cards.js";
import janeThumb from "./images/cardthumb_jane.png";
import ralphThumb from "./images/cardthumb_ralph.png";
import courtneyThumb from "./images/cardthumb_courtney.png";
import cameronThumb from "./images/cardthumb_cameron.png";
// import pickthesunMobileImg from "./images/pickthesun__mainimage_mobile-min.png";
// import pickthesunDesktopImg from "./images/pickthesun__mainimage.png";
import "./components/ScrollReveal.js";

const cardSection = document.querySelector(".quotes__cards");
const buttons = {
  right: document.querySelector(".quotes__arrowbutton-right"),
  left: document.querySelector(".quotes__arrowbutton-left"),
};

const quotes = [
  {
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    author: "Jane Cooper",
    kwh: "10KWh",
    thumb: janeThumb,
  },
  {
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    author: "Ralph Edwards",
    kwh: "32KWh",
    thumb: ralphThumb,
  },
  {
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    author: "Courtney Henry",
    kwh: "6KWh",
    thumb: courtneyThumb,
  },
  {
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    author: "Cameron Williamson",
    kwh: "12KWh ",
    thumb: cameronThumb,
  },
  {
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    author: "Cameron Williamson",
    kwh: "12KWh ",
    thumb: cameronThumb,
  },
];

let cardNum = 0;

quotes.forEach((quote, index) => {
  const cardQuote = new Card(quote, "#template", index);
  const CardElement = cardQuote.generateCard(cardNum);
  cardSection.append(CardElement);
});

buttons.right.addEventListener("click", () => {
  cardSection
    .querySelector(`#quote_${cardNum}`)
    .classList.remove("quotes__cardbox_focus");
  if (cardNum == quotes.length - 1) {
    cardNum = 0;
  } else {
    cardNum += 1;
  }
  const card = cardSection.querySelector(`#quote_${cardNum}`);

  card.classList.add("quotes__cardbox_focus");
  if (window.innerWidth <= 460) {
    cardSection.style.translate = `${-363 * cardNum - 5 * cardNum}px`;
  } else {
    cardSection.style.translate = `${-388 * cardNum}px`;
  }
});

// -----
buttons.left.addEventListener("click", () => {
  cardSection
    .querySelector(`#quote_${cardNum}`)
    .classList.remove("quotes__cardbox_focus");
  if (cardNum == 0) {
    cardNum = quotes.length - 1;
  } else {
    cardNum -= 1;
  }
  const card = cardSection.querySelector(`#quote_${cardNum}`);

  card.classList.add("quotes__cardbox_focus");
  if (window.innerWidth <= 460) {
    cardSection.style.translate = `${-363 * cardNum - 5 * cardNum}px`;
  } else {
    cardSection.style.translate = `${-388 * cardNum}px`;
  }
});

// if (window.innerWidth <= 460) {
//   document.querySelector(".pickthesun__main-image").src = pickthesunMobileImg;
// } else {
//   document.querySelector(".pickthesun__main-image").src = pickthesunDesktopImg;
// }
