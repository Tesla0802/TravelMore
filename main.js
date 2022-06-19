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
  logIn.style.display = "none";
  signUp.style.display = "none";
  logOut.style.display = "inline-block";
  logOut.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
  let cardAray = getArrayFromFirebase("Card")
  const Card = document.querySelector(".card")
  console.log(cardAray)
  setTimeout(() => {
    cardAray.forEach((element) => {
      Card.innerHTML += `
      <div class="card">
      <div class="info">
        <div>
          <div>
            <h1>${Name}</h1>
          </div>
          <div class="p">
            <p>
            ${text}
            </p>
          </div>
          <div class="contact">
            <p>
              <i class="fa-solid fa-phone one"></i> ${number}
            </p>
            <p>
              <i class="fa-solid fa-envelope two"></i> ${mail}
            </p>
            <p>
              <i class="fa-solid fa-location-pin three"></i>${place}
            </p>
          </div>
        </div>
      </div>
      <div class="image">
        <img
          src="${imgSrc}"
          alt=""
        />
      </div>
    </div>
      
      `
    } )
  }, 1500)
 
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
  picture: imgDiv,
  image: img,
  files: file,
  uplButton: uploadebtn,
});
