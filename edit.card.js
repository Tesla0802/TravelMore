const edit = document.querySelector(".edit");
const del = document.querySelector(".delete");
const card = document.querySelector(".card");

// let logic = true;

// edit.addEventListener("click", () => {
//   if (logic) {
//     `
//     <div class="card">
//     <div class="flip-card">
//         <div class="flip-card-inner">
//           <div class="flip-card-front">
//             <img src="${element.data.imgSrc}" alt="Avatar">
//           </div>
//           <div class="flip-card-back">
//             <div class="title">
//               <h1>${element.data.Name}</h1>
//             </div>
//             <div class="text">
//               <p>${element.data.text}</p>
//             </div>
//             <div class="contact">
//               <p>
//                 <i class="fa-solid fa-phone one"></i> ${element.data.number}
//               </p>
//               <p>
//                 <i class="fa-solid fa-envelope two"></i> ${element.data.mail}
//               </p>
//               <p>
//                 <i class="fa-solid fa-location-pin three"></i> ${element.data.location}
//               </p>
//               <p>
//                 <i class="fa-solid fa-money-bill-1-wave"></i> ${element.data.Price}
//               </p>
//               <p><i class="fa-solid fa-clock"></i> ${element.data.uploadTime}
//               </p>
//               <button class="btn btn-outline-warning edit" type="submit">
//                 edit
//               </button>
//               <button class="btn btn-outline-danger delete" type="submit">
//                 delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
// </div>
//     `;
//   }
//   logic = !logic;
// });

function displayData(displayElement, element, key) {
  displayElement.innerHTML += `    
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
            <div class="card-btn">
            <button class="btn btn-outline-warning edit" type="submit">
              edit
            </button>
            <button class="btn btn-outline-danger delete" type="submit">
              delate
            </button>
            <button class="btn btn-outline-success pay" type="submit">
            pay
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
</div>
  `;
}

//del.addEventListener("click", () => {
function deletePost(key) {
  removeElementFromFirebase(".card", key);
  location.reload();
}
//});
