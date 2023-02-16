const loginForm = document.querySelector(".login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

loginForm.addEventListener("submit", (e) => {
  if (!verify(email.value, password.value)) {
    e.preventDefault();
    alert("Incorrect email or password");
  }
});

function verify(email, password) {
  let acc = [];
  if (JSON.parse(localStorage.getItem("account"))) {
    acc = JSON.parse(localStorage.getItem("account"));
  }
  let av = false;
  acc.forEach((a) => {
    if (a.email == email && a.password == password) av = true;
  });
  return av;
}
