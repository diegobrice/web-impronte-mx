const marketing = document.querySelector(".marketing");
const diseño = document.querySelector(".diseño");
const web = document.querySelector(".web");

btnMarketing.addEventListener("click", () => {
  marketing.classList.remove("isHide");
  diseño.classList.add("isHide");
  web.classList.add("isHide");
});

btnDiseño.addEventListener("click", () => {
  marketing.classList.add("isHide");
  diseño.classList.remove("isHide");
  web.classList.add("isHide");
});

btnWeb.addEventListener("click", () => {
  marketing.classList.add("isHide");
  diseño.classList.add("isHide");
  web.classList.remove("isHide");
});
