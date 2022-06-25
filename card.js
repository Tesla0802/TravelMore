let searchInput =document.querySelector(".inputseven");
let BtnSearch =document.querySelector(".Btntwo");
let cardAray = getArrayFromFirebase("Card");
const card = document.querySelector(".card");
const displayAfter = document.querySelector(".displayafter");

let logic =true;
setTimeout(() => {
  cardAray.forEach((element) => {
    card.innerHTML += `
    <div class="card">
    <div class="info">
      <div>
        <div>
          <h1>${element.data.Name}</h1>
        </div>
        <div class="p">
          <p>
          ${element.data.text}
          </p>
        </div>
        <div class="contact">
          <p>
            <i class="fa-solid fa-phone one"></i> ${element.data.number}
          </p>
          <p>
            <i class="fa-solid fa-envelope two"></i> ${element.data.mail}
          </p>
          <p>
            <i class="fa-solid fa-location-pin three"></i>${element.data.place}
          </p>
        </div>
      </div>
    </div>
    <div class="image">
      <img
        src="${element.data.imgSrc}"
        alt=""
      />
    </div>
  </div>
    
    `
  } )
}, 2000)
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
      displayAfter.style.display = "flex";
      post.forEach((element) => {
        displayData(displayAfter, element.data, element.userid);
      });
    } else {
      card.style.display = "flex";
      displayAlert(
        "ვერ მოიძებნა",
        "ქარდი რომელსაც ეძებთ არ არსებობს",
        "question"
      );
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
  <div class="info">
    <div>
      <div>
        <h1>${element.Name}</h1>
      </div>
      <div class="p">
        <p>
        ${element.text}
        </p>
      </div>
      <div class="contact">
        <p>
          <i class="fa-solid fa-phone one"></i> ${element.number}
        </p>
        <p>
          <i class="fa-solid fa-envelope two"></i> ${element.mail}
        </p>
        <p>
          <i class="fa-solid fa-location-pin three"></i>${element.place}
        </p>
      </div>
    </div>
  </div>
  <div class="image">
    <img
      src="${element.imgSrc}"
      alt=""
    />
  </div>
</div>
  `;
}

function deletePost(key) {
  removeElementFromFirebase("Card", key);
  location.reload();
}