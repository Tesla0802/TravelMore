const Variability = document.querySelector(".Day-Night");
const body = document.querySelector("body");

Variability.addEventListener("click", () => {
  body.style.backgroundImage = "url(./img/bgNigth.dda13b0508ea72b6b5f0.png)";
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
