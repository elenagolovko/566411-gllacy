
var link = document.querySelector(".overlay-link");
var popup = document.querySelector(".write-to-us-container");
var modal = popup.querySelector(".write-to-us");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("overlay-show");
  modal.classList.add("modal-bounce");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("overlay-show");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
if (!login.value || !email.value || !comment.value) {
  evt.preventDefault();
  modal.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("overlay-show")) {
      popup.classList.remove("overlay-show");
    }
  }
});
