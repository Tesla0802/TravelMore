let scrollPrecentage = () => {
  let scrollProgress = document.querySelector("#progress");
  let progressValue = document.querySelector("#progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  scrollProgress.style.background = `conic-gradient(#b1eafd ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
};
window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;

$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $(".navigation").addClass("fix-icon");
  } else {
    $(".navigation").removeClass("fix-icon");
  }
});
