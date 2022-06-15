const pic = document.querySelector("profile-pic");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");

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
  logIn.style.display = "none";
  signUp.style.display = "none";
  logOut.style.display = "inline-block";
  logOut.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}

file.addEventListener("change", function () {
  const chooseFile = this.files[0];
  if (chooseFile) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(chooseFile);
  }
});

addElementInFirebase("profilePic/", {
  picture: pic,
  image: img,
  files: file,
  uplButton: uploadBtn,
});
