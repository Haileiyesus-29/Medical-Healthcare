const genderRadios = document.querySelectorAll(".gender-labels-hidden");
const genderInputs = document.querySelectorAll(".gender-inputs");
const loginForm = document.querySelector(".login-form");
const employeeRadio = document.querySelector(".signup-employee #employee");
const employeeLabel = document.querySelector(".employee-label");
const employeeCheckbox = document.querySelector(
  ".signup-employee .checkbox-ball"
);
genderInputs.forEach((input) =>
  input.addEventListener("change", () => {
    genderRadios.forEach((el) => el.classList.toggle("radio-checked"));
  })
);
employeeRadio.addEventListener("change", () => {
  employeeLabel.classList.toggle("active");
  employeeCheckbox.classList.toggle("active");
});
