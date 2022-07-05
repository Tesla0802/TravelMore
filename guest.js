

if (localStorage.getItem("userid")) {
    let url = location.href.split("/")[3];
    if (url === "login.html" || url === "register.html") {
      location.href = "index.html";
    }
    document.querySelectorAll(".clear").forEach((element) => {
      element.remove();
    });
  
    const guest = document.querySelector(".guest");
    const hotelMeneger = document.querySelector(".hotelMeneger");
  
    guest.style.display = "none";
    hotelMeneger.style.display = "flex";

  }