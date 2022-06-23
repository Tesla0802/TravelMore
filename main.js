const imgDiv = document.querySelector(".user-img");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadebtn = document.querySelector(".uploadebtn");
const Variability = document.querySelector(".Day-Night");
// $(".Day-Night")
// console.log(".Day-Night")
const body = document.querySelector("body");

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
  if(url === "signup.html" && url === "login.html" ){
    dropdownMenu.style.height = "2rem";
  }


// Variability.addEventListener("click", () => {
//   Variability.forEach((element) => {
//     element.className = "Night"
//   } )
// })

Variability.addEventListener("click", () => {
  body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
})}


// let logic = false,
// $(".Day-Night").click( () => {
//   $(".Day-Night").toggleClass("night")
//   if(logic){
//     $(".Day-Night").toggleClass("Day")
//   }else(
//     logic = !logic
//   )
// } )
// $(".Day-Night").click.toogle