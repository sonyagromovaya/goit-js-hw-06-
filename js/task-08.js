const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Fill all inputs please");
  }

  console.log(`Email: ${email.value}, and password: ${password.value}`);

  event.currentTarget.reset();
});
