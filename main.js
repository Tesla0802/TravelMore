const imgDiv = document.querySelector(".user-img");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadebtn = document.querySelector(".uploadebtn");

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
  dropdownMenu.style.height = "8rem";
  logOut.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
  if (url === "signup.html" && url === "login.html") {
    dropdownMenu.style.height = "2rem";
  }

  // Variability.addEventListener("click", () => {
  //   Variability.forEach((element) => {
  //     element.className = "Night"
  //   } )
  // })

  // Variability.addEventListener("click", () => {
  //   body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
  // })
}

// $(".Day-Night").click.toogle
