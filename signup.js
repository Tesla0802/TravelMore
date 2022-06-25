const nameInput = document.querySelector("#name");
const lastnameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submitButton");

const userArray = getArrayFromFirebase("User");

const guest = document.querySelector(".guest");
const hotelMeneger = document.querySelector(".hotelMeneger");
const admin = document.querySelector(".admin");

submitButton.addEventListener("click", () => {
  let name = nameInput.value;
  let last_name = lastnameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  if (name == "" || last_name == "" || email == "" || password == "") return;
  let alreadyUsedEmail = false;
  userArray.forEach((element) => {
    if (element.data.email === email) {
      alreadyUsedEmail = true;
      return;
    }
  });
  if (
    element.data.email === "admin@gmail.com" &&
    element.data.password === "Adminadmin"
  ) {
    guest.style.distplay = "none";
    admin.style.distplay = "inline-block";
  }
  addElementInFirebase("User/", {
    name: name,
    last_name: last_name,
    email: email,
    password: password,
  });
  displayAlert("მოგესალმებით", "ადმინი წარმატებით შევიდა სისტემაში", "success");
  if (alreadyUsedEmail) {
    displayAlert("შეცდომა", "უკვე არსებობს ესეთი იმეილი", "info");
    return;
  }
  addElementInFirebase("User/", {
    name: name,
    last_name: last_name,
    email: email,
    password: password,
  });
  displayAlert("შესრულდა", "წარმატებით დაემატა მომხარებელი", "success");
});
