const button = document.querySelector("button");
const wrapper = document.querySelector(".pop-wrapper");
const close = document.querySelector('.close-pop');

button.addEventListener("click", () => {
  wrapper.style.display = 'block';
});

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

wrapper.addEventListener('click', () => {
    wrapper.style.display = 'none';
});