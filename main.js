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

function toggleTheme() {
  let boringLink = document.getElementById("changeCSS");
  let cssFile;

  if (boringLink.getAttribute("href") === "boring.css") {
    cssFile = "awesome.css";
  } else {
    cssFile = "boring.css";
  }

  let awesomeLink = document.createElement("link");
  awesomeLink.setAttribute("id", "changeCSS");
  awesomeLink.setAttribute("rel", "stylesheet");

  awesomeLink.setAttribute("href", cssFile);

  document
    .getElementsByTagName("head")
    .item(0)
    .replaceChild(awesomeLink, boringLink);
}
