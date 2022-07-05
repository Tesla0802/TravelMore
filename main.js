const Variability = document.querySelector(".form-switch");
const body = document.querySelector("body");
const card = document.querySelector(".flip-card-back");
const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input-search");

function displayAlert(title, text, icon) {
  Swal.fire({
    icon: icon,
    text: text,
    title: title,
  });
}


if (localStorage.getItem("userid")) {
  let url = location.href.split("/")[3];
  if (url === "login.html" || url === "register.html") {
    location.href = "index.html";
  }
  document.querySelectorAll(".clear").forEach((element) => {
    element.remove();
  });

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
  if (url ===  "createhotel.html") {
    dropdownMenu.style.height = "3rem";
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
    card.style.backgroundColor = "#182f3f";
    btnSearch.style.color = "#afeafd";
    btnSearch.style.backgroundColor = "#182f3f";
    //inputSearch.style.borderBottom = "#182f3f80";
  } else {
    body.style.backgroundImage = "url(./img/bgDay.074ef37336b466c36b93.png)";
    card.style.backgroundColor = "#afeafd";
    btnSearch.style.color = "#182f3f";
    btnSearch.style.backgroundColor = "#afeafd";
    //inputSearch.style.borderBottom = "#afeafd80";
  }
  logic = !logic;
});
