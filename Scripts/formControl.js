const genderRadios = document.querySelectorAll(".gender-labels-hidden");
const genderInputs = document.querySelectorAll(".gender-inputs");
const loginForm = document.querySelector(".login-form");
const employeeRadio = document.querySelector(".signup-employee #employee");
const employeeLabel = document.querySelector(".employee-label");
const signupForm = document.querySelector(".signup-form");
const employeeCheckbox = document.querySelector(
  ".signup-employee .checkbox-ball"
);

const User = function (email, password) {
  this.email = email;
  this.password = password;
};

genderInputs.forEach((input) =>
  input.addEventListener("change", () => {
    genderRadios.forEach((el) => el.classList.toggle("radio-checked"));
  })
);
employeeRadio.addEventListener("change", () => {
  employeeLabel.classList.toggle("active");
  employeeCheckbox.classList.toggle("active");
});

signupForm.addEventListener("submit", (e) => {
  let elements = [
    signupForm.querySelector(".firstname"),
    signupForm.querySelector(".lastname"),
    // signupForm.querySelector('.address'),
    signupForm.querySelector(".phone"),
    signupForm.querySelector(".password"),
    signupForm.querySelector(".email"),
  ];
  let errors = [];
  if (elements[0].value.length < 3) {
    elements[0].style.border = "2px solid red";
    errors.push("First Name must contain atleast 3 characters.");
  } else elements[0].style.border = "none";

  if (elements[1].value.length < 3) {
    elements[1].style.border = "2px solid red";
    errors.push("Last name must contain atleast 3 characters");
  } else elements[1].style.border = "none";

  if (!Number(elements[2].value)) {
    elements[2].style.border = "2px solid red";
    errors.push("Invalid phone number");
  } else elements[2].style.border = "none";

  if (elements[3].value.length < 6) {
    elements[3].style.border = "2px solid red";
    errors.push("Password must be atleast 6 characters long");
  } else elements[3].style.border = "none";

  if (!isAvailable(elements[4].value)) {
    elements[4].style.border = "2px solid red";
    errors.push("Email already exists");
  } else elements[4].style.border = "none";

  if (errors.length) {
    e.preventDefault();
    alert(`${errors.map((e) => e + "\n")}`);
  } else {
    const email = signupForm.querySelector(".email").value;
    const password = signupForm.querySelector(".password").value;
    saveAccount(email, password);
  }
});

function saveAccount(email, password) {
  let acc = [];
  if (JSON.parse(localStorage.getItem("account"))) {
    acc = JSON.parse(localStorage.getItem("account"));
  }
  console.log("save acc");
  acc.push(new User(email, password));
  localStorage.setItem("account", JSON.stringify(acc));
}

function isAvailable(email) {
  let acc = [];
  if (JSON.parse(localStorage.getItem("account"))) {
    acc = JSON.parse(localStorage.getItem("account"));
  }
  let av = true;
  acc.forEach((a) => {
    if (a.email == email) av = false;
  });
  return av;
}
