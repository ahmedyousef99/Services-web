// --------------------- The Start Of ::  For making navbar slide with scroll ------------
// --------------------- The Start Of ::  For making navbar slide with scroll ------------

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 460 ||
    document.documentElement.scrollTop > 460
  ) {
    document.getElementById("navbar_top").style.top = "0";
    document.getElementById("navbar_top").style.backgroundColor = "#014e7b41";
    document.querySelector(".navbtns").style.display = "block";
    document.querySelector(".hov2").classList.add("hov1");
    document.querySelector(".hov3").classList.add("hov1");
    document.querySelector(".hov4").classList.add("hov1");
    document.querySelector(".hov5").classList.add("hov1");
    document.querySelector(".hov6").classList.add("hov1");
  } else {
    document.getElementById("navbar_top").style.top = "-50px";
    document.getElementById("navbar_top").style.backgroundColor = "transparent";
    document.querySelector(".hov2").classList.remove("hov1");
    document.querySelector(".hov3").classList.remove("hov1");
    document.querySelector(".hov4").classList.remove("hov1");
    document.querySelector(".hov5").classList.remove("hov1");
    document.querySelector(".hov6").classList.remove("hov1");
    document.querySelector(".navbtns").style.display = "none";
  }
}

// --------------------- The END Of ::  For making navbar slide with scroll ------------

// --------------------- The Start Of ::  For making navbar items lead us to sections slide with scroll ------------

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY < 200) {
      document.getElementById("home").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("home").classList.remove("actived");
      // remove padding top from body
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400 && window.scrollY < 1020) {
      document.getElementById("services").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("services").classList.remove("actived");
      // remove padding top from body
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1030 && window.scrollY < 1550) {
      document.getElementById("about").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("about").classList.remove("actived");
      // remove padding top from body
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1551 && window.scrollY < 1980) {
      document.getElementById("stage").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("stage").classList.remove("actived");
      // remove padding top from body
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1981 && window.scrollY < 2550) {
      document.getElementById("contact").classList.add("actived");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("contact").classList.remove("actived");
      // remove padding top from body
    }
  });
});
// --------------------- The End Of ::  For making navbar items lead us to sections slide with scroll ------------
