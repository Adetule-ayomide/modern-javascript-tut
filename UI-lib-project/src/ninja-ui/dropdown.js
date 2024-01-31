import './styles/dropdown.css';

class Dropdown {
  constructor(element) {
    this.element = element;
    this.trigger = this.element.querySelector(".trigger");
    this.content = this.element.querySelector(".content");
  }

  init() {
    this.element.addEventListener("click", () => {
      this.trigger.classList.toggle("active");
      this.content.classList.toggle("active");
    });
  };
};


export { Dropdown as default };
