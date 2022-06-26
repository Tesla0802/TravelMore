const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadebtn = document.querySelector(".uploadebtn");
const Variability = document.querySelector(".Day-Night");
const body = document.querySelector("body");
const card = document.querySelector(".flip-card-back");

let logic = true;

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
}

if (!localStorage.getItem("userid")) {
  if (location.href.split("/")[3] === "createhotel.html") {
    location.href = "index.html";
  }
}
Variability.addEventListener("click", () => {
  if (logic) {
    localStorage.setItem("user", true);
    body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
    card.style.backgroundColor = "#182f3f";
  } else {
    localStorage.setItem("user", false);
    body.style.backgroundImage = "url(./img/bgDay.074ef37336b466c36b93.png)";
    card.style.backgroundColor = "#2fadd9";
  }
  logic = !logic;
  if (localStorage.setItem == ("user", true)) {
    body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
  } else if (localStorage.setItem == ("user", false)) {
    body.style.backgroundImage = "url(./img/bgDay.074ef37336b466c36b93.png)";
  }
  // if (logic) {
  //   localStorage.setItem("user", Night)
  //   body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
  // } else {
  //   localStorage.setItem("user", Day )
  //   body.style.backgroundImage = "url(./img/bgDay.074ef37336b466c36b93.png)";
  // }
  // logic = !logic;
  // if(localStorage.setItem == ("user", Night )) {
  //   body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
  // }else if(localStorage.setItem == ("user", Day ) ) {
  //   body.style.backgroundImage = "url(./img/bgDay.074ef37336b466c36b93.png)";

  // }
});

let scrollPrecentage = () => {
  let scrollProgress = document.querySelector("#progress");
  let progressValue = document.querySelector("#progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  scrollProgress.style.background = `conic-gradient(#b1eafd ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
};
window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;

$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $(".navigation").addClass("fix-icon");
  } else {
    $(".navigation").removeClass("fix-icon");
  }
});
