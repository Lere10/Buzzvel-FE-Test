export default class Card {
  constructor(info, templateSelector) {
    this._name = info.author;
    this._thumb = info.thumb;
    this._text = info.text;
    this._kwh = info.kwh;
    this._template = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._template)
      .content.querySelector(".quotes__cardbox")
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".quotes__cardtext").textContent = this._text;
    this._element.querySelector(".quotes__cardauthor-img").src = this._thumb;
    this._element.querySelector(".quotes__cardauthor-infos-name").textContent =
      this._name;
    this._element.querySelector(
      ".quotes__cardauthor-infos-subname"
    ).textContent = this._kwh;

    return this._element;
  }
}
