const Variability = document.querySelector(".form-switch");
const body = document.querySelector("body");
const card = document.querySelector(".flip-card-back");
function displayAlert(title, text, icon) {
  Swal.fire({
    icon: icon,
    text: text,
    title: title,
  });
}

// file.addEventListener("cange", function () {
//   const choosedfile = this.file[0];
//   if (choosedfile) {
//     const reader = new FileReader();
//     reader.addEventListener("load", function () {
//       img.setAttribute("src", reader.result);
//     });
//     reader.readAsDataURL(choosedfile);
//   }
// });

if (localStorage.getItem("userid")) {
  let url = location.href.split("/")[3];
  if (url === "login.html" || url === "register.html") {
    location.href = "index.html";
  }
  document.querySelectorAll(".clear").forEach((element) => {
    element.remove();
  });

  // const guest = document.querySelector(".guest");
  // const hotelMeneger = document.querySelector(".hotelMeneger");

  // guest.style.display = "none";
  // hotelMeneger.style.display = "flex";
  const logOut = document.querySelector(".log-out");
  const logIn = document.querySelector(".log-in");
  const signUp = document.querySelector(".sign-up");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  logIn.style.display = "none";
  signUp.style.display = "none";
  logOut.style.display = "inline-block";
  dropdownMenu.style.height = "10rem";
  logOut.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
  if (url === "signup.html" && url === "login.html") {
    dropdownMenu.style.height = "2rem";
  }
}

if (!localStorage.getItem("userid")) {
  if (location.href.split("/")[3] === "createhotel.html") {
    location.href = "index.html";
  }
}

let logic = true;

Variability.addEventListener("click", () => {
  if (logic) {
    body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
  } else {
    body.style.backgroundImage = "url(./img/bgDay.074ef37336b466c36b93.png)";
  }
  logic = !logic;
});
