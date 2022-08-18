import "./styles.css";

const form = document.querySelector("form");
const submit = document.querySelector('button[type="submit"]');

function handleForm(event) {
  const form = event.target.form || event.target;
  const isValid = form.checkValidity();

  submit.disabled = !isValid;
  console.log({ isValid, form: form.name.value });
}

form.addEventListener("change", handleForm);
form.addEventListener("reset", (event) => {
  setTimeout(() => handleForm(event), 0);
});
