let menu = document.querySelector(".ri-menu-2-fill");
let hide = document.querySelector(".hide");
let ishidden = false;
function showmenu() {
  if (!ishidden) {
    hide.style.display = "block";
    ishidden = true;
  } else {
    hide.style.display = "none";
    ishidden = false;
  }
}
menu.addEventListener("click", showmenu);

// car show on click

let mercedes = document.querySelector(".mercedes");
let typeM = document.querySelector(".type_M");
let audi = document.querySelector(".audi");
let typeA = document.querySelector(".type_A");
let honda = document.querySelector(".honda");
let typeH = document.querySelector(".type_H");
let toyota = document.querySelector(".toyota");
let typeT = document.querySelector(".type_T");
let jaguar = document.querySelector(".jaguar");
let typeJ = document.querySelector(".type_J");
let ferrari = document.querySelector(".ferrari");
let typeF = document.querySelector(".type_F");

function showCar(carElement) {
  // Hide all cars first
  mercedes.style.display = "none";
  audi.style.display = "none";
  honda.style.display = "none";
  toyota.style.display = "none";
  jaguar.style.display = "none";
  ferrari.style.display = "none";

  // Show the selected car
  // Check the screen width
  if (window.innerWidth < 600) {
    // If screen width is less than 600px, set display to block
    carElement.style.display = "block";
  } else {
    // Otherwise, set display to grid
    carElement.style.display = "grid";
  }
}

typeM.addEventListener("click", function () {
  showCar(mercedes);
});
typeA.addEventListener("click", function () {
  showCar(audi);
});

typeH.addEventListener("click", function () {
  showCar(honda);
});
typeT.addEventListener("click", function () {
  showCar(toyota);
});
typeJ.addEventListener("click", function () {
  showCar(jaguar);
});
typeF.addEventListener("click", function () {
  showCar(ferrari);
});

// swiper js

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// show car details
let buybtn_m1 = document.querySelectorAll("#m1");
buybtn_m1.forEach(function (buybtn) {
  buybtn.addEventListener("click", function () {
    window.location.href = "Mercedes_Car_1.html";
  });
});

let buybtn_a1 = document.querySelectorAll("#a1");
buybtn_a1.forEach(function (buybtn) {
  buybtn.addEventListener("click", function () {
    window.location.href("Audi_Car_1.html");
  });
});

let buybtn_h1 = document.querySelectorAll("#h1");
buybtn_h1.forEach(function (buybtn) {
  buybtn.addEventListener("click", function () {
    window.location.href("Honda_Car_1.html");
  });
});

let buybtn_t1 = document.querySelectorAll("#t1");
buybtn_t1.forEach(function (buybtn) {
  buybtn.addEventListener("click", function () {
    window.location.href("Toyota_Car_1.html");
  });
});

let buybtn_j1 = document.querySelectorAll("#j1");
buybtn_j1.forEach(function (buybtn) {
  buybtn.addEventListener("click", function () {
    window.location.href("jaguar_Car_1.html");
  });
});

let buybtn_F1 = document.querySelectorAll("#f1");
buybtn_F1.forEach(function (buybtn) {
  buybtn.addEventListener("click", function () {
    window.location.href("Ferrari_Car_1.html");
  });
});

let loginPage = document.getElementById("login_page");
let heidContent = document.querySelector("#login_hide_content");

// Function to handle the click event on the element with id "sin"
function Showother() {
  heidContent.style.display = "block";
  loginPage.style.display = "none";
}

// Function to load the content of login.html
function Showloginpage() {
  // Load the second page content into a div
  loginPage.innerHTML =
    '<object type="text/html" data="login.html" style="width:100%; height:500px; margin-top: 60px;"></object>';
  heidContent.style.display = "none";

  // Accessing element with id "sin" from the dynamically loaded HTML
  let signinFrame = loginPage.querySelector("object");
  signinFrame.addEventListener("load", function () {
    let signin = signinFrame.contentDocument.querySelector("#sin");
    signin.addEventListener("click", Showother);
  });
}

// Set a timeout to call Showloginpage after 1000 milliseconds (1 second)
// let timeoutId = setTimeout(Showloginpage, 1000);

// Clear the timeout after 3000 milliseconds (3 seconds)
// setTimeout(() => {
//   clearTimeout(timeoutId);
// }, 3000);
