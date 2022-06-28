const nameInput = document.querySelector("#name");
const lastnameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submitButton");
const Type = document.querySelector("#Admin")

const userArray = getArrayFromFirebase("User");
const acc = document.querySelector(".dropdown-menu");

acc.style.height = "3rem";

submitButton.addEventListener("click", () => {
  let name = nameInput.value;
  let last_name = lastnameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let type = Type.value
  if (name == "" || last_name == "" || email == "" || password == "" || type == "") return;
  let alreadyUsedEmail = false;
  userArray.forEach((element) => {
    if (element.data.email === email) {
      alreadyUsedEmail = true;
      return;
    }
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
    type : type,
  });
  displayAlert("შესრულდა", "წარმატებით დაემატა მომხარებელი", "success");
  setTimeout(() => {
    location.href = "login.html"
  },1500)
});
