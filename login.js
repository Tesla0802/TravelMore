const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submitButton");

const userArray = getArrayFromFirebase("User");

const guest = document.querySelector(".guest");
const hotelMeneger = document.querySelector(".hotelMeneger");
const admin = document.querySelector(".admin");

submitButton.addEventListener("click", () => {
  let email = emailInput.value;
  let password = passwordInput.value;
  let currentUser = {};
  let successAuth = false;
  userArray.forEach((element) => {
    if (element.data.email === email && element.data.password === password) {
      successAuth = true;
      currentUser = element;
      return;
    }
  });
});
