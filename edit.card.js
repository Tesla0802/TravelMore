const BTN2 = document.querySelector("#Btn2");
const Name = document.querySelector(".inputone");
const number = document.querySelector(".inputtwo");
const mail = document.querySelector(".inputthree");
const place = document.querySelector(".inputfour");
const text = document.querySelector(".inputfive");
const image = document.querySelector(".inputsix");
const Price = document.querySelector(".inputeight");
const BTN = document.querySelector(".Btn");
const userId = localStorage.getItem("userid");

// BTN2.addEventListener("click", () => {
//   location.href = "editcard.html"
// } )
const LastName = document.querySelector ("#name")
const CardAray = getArrayFromFirebase("Card");
setTimeout(() => { 
  if(userId) {
    let cuerrentUser = {};
    userArray.forEach((element) => {
      if(element.userid === userId) {
        cuerrentUser = element ;
      return;
      }
    } )
  }
  LastName.innerHTML = `${cuerrentUser.data.Name}`
  
}, 2000)