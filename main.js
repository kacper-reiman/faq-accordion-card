// ADDING ACTIVE CLASS TO AN ELEMENT TO REVEAL CONTENT
let questions = document.querySelectorAll(".question");

questions.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      questions.forEach((question) =>
        question.parentNode.classList.remove("active")
      );

      question.parentNode.classList.add("active");
    }
  })
);

// TOGGLE THEME FUNCTION
const toggleBtn = document.querySelector(".theme__switch");
// const heroImageDesktop = document.getElementById("hero__img__desktop");
// const heroImageMobile = document.getElementById("hero__img__mobile");

function changeTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("hero__img__desktop").style.opacity = "0.8";
    document.getElementById("hero__img__mobile").style.opacity = "0.8";
    document.getElementById("hero__img__box").style.opacity = "0.8";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("hero__img__desktop").style.opacity = "1";
    document.getElementById("hero__img__mobile").style.opacity = "1";
    document.getElementById("hero__img__box").style.opacity = "1";
  }
}
toggleBtn.addEventListener("click", changeTheme);
