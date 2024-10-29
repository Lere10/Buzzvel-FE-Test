export default class Card {
  constructor(info, templateSelector, index) {
    this._name = info.author;
    this._thumb = info.thumb;
    this._text = info.text;
    this._kwh = info.kwh;
    this._template = templateSelector;
    this._index = index;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._template)
      .content.querySelector(".quotes__cardbox")
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard(index) {
    this._element = this._getTemplate();

    this._element.querySelector(".quotes__cardtext").textContent = this._text;
    this._element.querySelector(".quotes__cardauthor-img").src = this._thumb;
    this._element.querySelector(".quotes__cardauthor-infos-name").textContent =
      this._name;
    this._element.querySelector(
      ".quotes__cardauthor-infos-subname"
    ).textContent = this._kwh;

    this._index !== null &&
      this._element.setAttribute("id", `quote_${this._index}`);

    this._index === index &&
      this._element.classList.add("quotes__cardbox_focus");

    return this._element;
  }
}
