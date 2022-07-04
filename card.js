const searchInput = document.querySelector("#inputseven");
const BtnSearch = document.querySelector(".Btntwo");
const cardAray = getArrayFromFirebase("Card");
const Card = document.querySelector(".card");
const displayAfter = document.querySelector(".displayafter");
const BTN2 = document.querySelector("#Btn2");
let NavbarItems = document.querySelector("#li");
const userArray = getArrayFromFirebase("User");
const userId = localStorage.getItem("userid");
// const lastnameInput = document.querySelector("#lastname");

setTimeout(() => {
  cardAray.forEach((element) => {
    Card.innerHTML += `    
    <div class="card">
    <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${element.data.imgSrc}" alt="Avatar">
          </div>
          <div class="flip-card-back">
            <div class="title">
              <h1>${element.data.Name}</h1>
            </div>
            <div class="text">
              <p>${element.data.text}</p>
            </div>
            <div class="contact">
              <p>
                <i class="fa-solid fa-phone one"></i> ${element.data.number}
              </p>
              <p>
                <i class="fa-solid fa-envelope two"></i> ${element.data.mail}
              </p>
              <p>
                <i class="fa-solid fa-location-pin three"></i> ${element.data.location}
              </p>
              <p>
                <i class="fa-solid fa-money-bill-1-wave"></i> ${element.data.Price}
              </p>
              <p><i class="fa-solid fa-clock"></i> ${element.data.uploadTime}
              </p>
              <div class="Edit">
              <button onclick="Delete(${element.userIdkey}) "   id="Btn2" type="button" class="btn btn-outline-danger">
              Delete 
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
</div>
    `;
  });
}, 3000);

BtnSearch.addEventListener("click", () => {
  let searchResult = searchInput.value;
  let logic = true;
  if (logic) {
    Card.style.display = "none";
    let post = [];
    let found = false;
    cardAray.forEach((element) => {
      if (element.data.Name == searchResult) {
        found = true;
        post.push(element);
      }
    });
    if (found) {
      post.forEach((element) => {
        displayData(displayAfter, element.data, element.userid);
      });
    } else {
      displayAlert(
        "ვერ მოიძებნა",
        "ქარდი რომელსაც ეძებთ არ არსებობს",
        "question"
      );
      setTimeout(() => {
        location.href = "index.html";
      }, 2000);
    }
  } else {
    displayAfter.style.display = "none";
    displayAfter.innerHTML = "";
    Card.style.display = "flex";
  }
  logic = !logic;
  searchInput.value = "";
});
let type;
function displayData(displayElement, element, key) {
  displayElement.innerHTML += `
  <div class="card">
    <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${element.imgSrc}" alt="Avatar">
          </div>
          <div class="flip-card-back">
            <div class="title">
              <h1>${element.Name}</h1>
            </div>
            <div class="text">
              <p>${element.text}</p>
            </div>
            <div class="contact">
              <p>
                <i class="fa-solid fa-phone one"></i> ${element.number}
              </p>
              <p>
                <i class="fa-solid fa-envelope two"></i> ${element.mail}
              </p>
              <p>
                <i class="fa-solid fa-location-pin three"></i> ${element.location}
              </p>
              <p>
                <i class="fa-solid fa-money-bill-1-wave"></i> ${element.Price}
              </p>
              <p><i class="fa-solid fa-clock"></i> ${element.uploadTime}
              </p>
              <div class="Edit">
              <button onclick="Delete(${element.userIdkey}) "   id="Btn2" type="button" class="btn btn-outline-danger">
              Delete 
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
</div>
  `;
}

function Delete(key) {
  removeElementFromFirebase("Card", key);
  location.reload();
}
// getArrayFromFirebase("User/", {
//   console.log()
// } )

// BTN2.addEventListener("click", () => {
//   NavbarItems.innerHTML += `
//   <a class="nav-link" href="./editcard.html"
//   >Edit Card</a
// >`
//  location.href = "editcard.html"
//  setTimeout(() => {
//   if(userId) {
//     let cuerrentUser = {};
//     userArray.forEach((element) => {
//       if(element.userid === userId) {
//         cuerrentUser = element ;
//       return;
//       }
//     } )
//   }
//  },2000)
// } )

