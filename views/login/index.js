const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const form = document.querySelector("#form");

form.addEventListener("submit", async event => {
  try {
    event.preventDefault();
    const user = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    await axios.post("/api/login", user);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
});
