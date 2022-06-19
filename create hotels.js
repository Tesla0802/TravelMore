const Name = document.querySelector(".inputone")
const number = document.querySelector(".inputtwo")
const mail = document.querySelector(".inputthree")
const place = document.querySelector(".inputfour")
const text  = document.querySelector(".inputfive")
const BTN = document.querySelector(".Btn")
BTN.addEventListener("click", () => {
    let inputoneValue = Name.value;
    let inputtwoValue = number.value;
    let inputthreeValue = mail.value;
    let inputfourValue =  place.value;
    let inputfiveValue = text.value;
    if(inputoneValue==="" || inputtwoValue==="" || inputthreeValue==="" || inputfourValue==="" || inputfiveValue=== "" ) {
        return;
    }
    let imgSrc = "";
    try {
      const reader = new FileReader();
      reader.readAsDataURL(image.files[0]);
      reader.onload = () => {
        imgSrc = reader.result;
        addElementInFirebase("Card/", {
          Name: titleValue,
          text: textValue,
          imgSrc: imgSrc,
        });
      };
    } catch (err) {
      imgSrc =
        "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
      addElementInFirebase("Card/", {
         Name:inputoneValue,
         number:inputtwoValue,
         mail:inputthreeValue,
         location:inputfourValue,
         text:inputfiveValue,
         uploadTime: new Date().toLocaleString(),
      });
    }
    displayAlert("წარმატებული ოპერაცია", "პოსტი წარმატებით დაემატა", "success");
     Name.value = "";
    text.value = "";
    setTimeout(() => {
      location.href = "index.html";
    }, 1500);
} )

