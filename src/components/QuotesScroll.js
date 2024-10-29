// * .quotes__cardbox:nth-of-type(${card_id}) {
//  min-height: 490px;
// }

export default class Scroll {
  constructor(quotes, buttons) {
    // this._card = cardClass;
    this._quotes = quotes;
    this._rightButton = buttons.right;
    this._leftButton = buttons.left;
    this._id = 0;
  }

  setEventListeners() {
    this._rightButton.addEventListener("click", () => {
      this._quotes
        .querySelector(`.quotes__cardbox:nth-of-type(${this._id})`)
        .removeClass("quotes__cardbox_focus");
      this._id = this._id + 1;
    });
  }
}

// começar com focus no elemento 1
// ouvir clique dos botoes <- ->
// retirar focus do elemento atual
// adicionar focus no id +1 ou -1 (se existir)
