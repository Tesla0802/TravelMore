const InputOne = document.querySelector(".inputone")
const InputTwo = document.querySelector(".inputtwo")
const INputThree = document.querySelector(".inputthree")
const INputFour = document.querySelector(".inputfour")
const InputFive = document.querySelector(".inputfive")
const BTN = document.querySelector(".Btn")
BTN.addEventListener("click", () => {
    let inputoneValue = InputOne.value;
    let inoutwtoValue = InputTwo.value;
    let inoutthreeValue = INputThree.value;
    let inoutfourValue = INputFour.value;
    let inoutfiveValue = InputFive.value;
    if(inputoneValue==="" || inoutwtoValue==="" || inoutthreeValue==="" || inoutfourValue==="" || inoutfiveValue=== "" ) {
        return;
    }
    let imgSrc =""
    const reader = new FileReader();
    reader.readAsDataURL(imgSrc.files[0]);
    reader.onload = () => {
        imgSrc = reader.result;
        console.log(imgSrc) 
    };
} )

