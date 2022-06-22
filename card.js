let cardAray = getArrayFromFirebase("Card")
const Card = document.querySelector(".card")
setTimeout(() => {
  cardAray.forEach((element) => {
    Card.innerHTML += `
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