const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function getbackHome() {
  let sin = document.querySelector("#sin");
  let sup = document.querySelector("#sup");
  sin.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "https://rentcaar.netlify.app/home.html";
  });
  sup.addEventListener("click", () => {
    event.preventDefault();
    window.location.href = "https://rentcaar.netlify.app/home.html";
  });
}
getbackHome();