var link=document.querySelector(".overlay-link"),popup=document.querySelector(".write-to-us-container"),modal=popup.querySelector(".write-to-us"),close=popup.querySelector(".modal-close"),login=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),comment=popup.querySelector("[name=comment]"),form=popup.querySelector("form");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("overlay-show"),login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("overlay-show"),modal.classList.remove("modal-error")}),form.addEventListener("submit",function(e){login.value&&email.value&&comment.value||(e.preventDefault(),modal.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("overlay-show")&&popup.classList.remove("overlay-show")});
