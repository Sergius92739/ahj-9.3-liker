export default class Liker {
  constructor() {
    this.container = null;
    this.animNames = ['right', 'left', 'center_right', 'center_left'];

    this.onClick = this.onClick.bind(this);
  }

  getName() {
    return this.animNames[Math.floor(Math.random() * this.animNames.length)];
  }

  static get markUp() {
    return '<img class="heart" src="./images/heart.png">';
  }

  init() {
    this.checkBinding();
    this.button = this.container.querySelector('.liker__btn');
    this.button.addEventListener('click', this.onClick);
  }

  onClick() {
    this.container.insertAdjacentHTML('beforeend', Liker.markUp);
    const img = this.container.querySelector('.heart');
    img.classList.add(this.getName());
    img.addEventListener('animationend', () => {
      [...document.querySelectorAll('.heart')].forEach((elem) => elem.remove());
    });
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('container not bind to DOM');
    }
  }
}
