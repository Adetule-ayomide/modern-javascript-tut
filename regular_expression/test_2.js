const form = document.querySelector(".signup-form");
// const username = document.querySelector('[name=username]');
const pattern = /^[a-zA-Z]{6,10}$/;
const content = document.querySelector(".content");

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     // console.log(form.name.value);
//     // console.log(username.value);
// });

// regex
// const user = 'ayomide';

// const result = pattern.test(user);

// if (result){
//     console.log('character passed :) ');
// } else{
//     console.log('character failed :( ');
// }

// const res = user.search(pattern);
// console.log(res);

// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = form.name.value;

  if (pattern.test(value)) {
    content.textContent = "thats is a valid username";
  } else {
    content.textContent =
      "the username must contain small letter or capital letter and it must be 6 to 10 character long";
  }
});

form.name.addEventListener("keyup", (e) => {
  if (pattern.test(e.target.value)) {
    form.name.setAttribute("class", "success");
  } else {
    form.name.setAttribute("class", "error");
  }
});
