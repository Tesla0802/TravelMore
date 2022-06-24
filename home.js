const Variability = document.querySelector(".Day-Night");
const body = document.querySelector("body");
let logic = true;

Variability.addEventListener("click", () => {
<<<<<<< HEAD
  body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
=======
  if (logic) {
    body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
  } else {
    body.style.backgroundImage = "url(./img/bgDay.074ef37336b466c36b93.png)";
  }
  logic = !logic;
>>>>>>> 62b4baf3aaa5008c18ab53a4df2a00c6c51ec16f
});

// $(Variability).click(function () {
//   $(body).css(
//     "background-image",
//     "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)"
//   );
// });

// $(document).ready(function () {
//   $(Variability).click(function () {
//     var imageUrl = "./img/bgNigth.dda13b0508ea72b6b5f0.png";
//     $(body).css("background-image", "url(" + imageUrl + ")");
//   });
// });
