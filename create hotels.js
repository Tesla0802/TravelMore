const InputOne = document.querySelector(".inputone")
const InputTwo = document.querySelector(".inputtwo")
const INputThree = document.querySelector(".inputthree")
const INputFour = document.querySelector(".inputfour")
const InputFive = document.querySelector(".inputfive")
const BTN = document.querySelector(".Btn")
BTN.addEventListener("click", () => {
    let inputoneValue = InputOne.value;
    let inputtwoValue = InputTwo.value;
    let inputthreeValue = INputThree.value;
    let inputfourValue = INputFour.value;
    let inputfiveValue = InputFive.value;
    if(inputoneValue==="" || inputtwoValue==="" || inputthreeValue==="" || inputfourValue==="" || inputfiveValue=== "" ) {
        return;
    }
    let imgSrc = "";
    try {
      const reader = new FileReader();
      reader.readAsDataURL(image.files[0]);
      reader.onload = () => {
        imgSrc = reader.result;
        addElementInFirebase("Post/", {
          title: titleValue,
          text: textValue,
          imgSrc: imgSrc,
        //   uploadTime: new Date().toLocaleString(),
        });
      };
    } catch (err) {
      imgSrc =
        "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
      addElementInFirebase("Card/", {
         InputOne:inputoneValue,
         InputTwo:inputtwoValue,
         INputThree:inputthreeValue,
         INputFour:inputfourValue,
         InputFive:inputfiveValue,
         uploadTime: new Date().toLocaleString(),
      });
    }
    displayAlert("წარმატებული ოპერაცია", "პოსტი წარმატებით დაემატა", "success");
    InputOne.value = "";
    InputTwo.value = "";
    setTimeout(() => {
      location.href = "index.html";
    }, 1500);
} )

