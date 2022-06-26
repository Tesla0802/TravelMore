const searchInput = document.querySelector(".inputseven");
const BtnSearch = document.querySelector(".Btntwo");
const cardAray = getArrayFromFirebase("Card");
const card = document.querySelector(".card");
const displayAfter = document.querySelector(".displayafter");

setTimeout(() => {
  cardAray.forEach((element) => {
    card.innerHTML += `    
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
  if (logic) {
    card.style.display = "none";
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
    card.style.display = "flex";
  }
  logic = !logic;
  searchInput.value = "";
});

function displayData(displayElement, element, key) {
  displayElement.innerHTML += `
  <div class="card">
  <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${element.imgSrc}" alt="Avatar">
        </div>
        <div class="flip-card-back">
          <div class="titl1e">
            <h1>${element.Name}</h1>
          </div>
          <div class="text">
            <p>${element.data.text}</p>
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
          </div>
        </div>
      </div>
    </div>
</div>
  `;
}

function deletePost(key) {
  removeElementFromFirebase("Card", key);
  location.reload();
}
