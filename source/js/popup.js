var feedback = document.querySelector(".feedback");
var popupFailure = document.querySelector(".popup--failure");
var popupSuccess = document.querySelector(".popup--success");
var overlay = document.querySelector(".popup-overlay");
var firstName = feedback.querySelector("[name=first-name]");
var secondName = feedback.querySelector("[name=second-name]");
var tel = feedback.querySelector("[name=tel]");
var email = feedback.querySelector("[name=email]");
var feedbackBTN = feedback.querySelector(".feedback__btn");
var closeFailure = popupFailure.querySelector(".popup__btn-ok");
var closeSuccess = popupSuccess.querySelector(".popup__btn-close");

feedbackBTN.addEventListener("click", function (event) {
  event.preventDefault();
  if (!firstName.value || !secondName.value || !tel.value || !email.value) {
    overlay.classList.add("popup--show");
    popupFailure.classList.add("popup--show");
    closeFailure.focus();
  } else {
    overlay.classList.add("popup--show");
    popupSuccess.classList.add("popup--show");
    closeSuccess.focus();
  }
});

closeFailure.addEventListener("click", function (event) {
  event.preventDefault();
  popupFailure.classList.remove("popup--show");
  overlay.classList.remove("popup--show");
});

closeSuccess.addEventListener("click", function (event) {
  event.preventDefault();
  popupSuccess.classList.remove("popup--show");
  overlay.classList.remove("popup--show");
});

overlay.addEventListener("click", function (event) {
  event.preventDefault();
  popupFailure.classList.remove("popup--show");
  popupSuccess.classList.remove("popup--show");
  overlay.classList.remove("popup--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popupFailure.classList.contains("popup--show") && overlay.classList.contains("popup--show")) {
      popupFailure.classList.remove("popup--show");
      overlay.classList.remove("popup--show");
    }
    if (popupSuccess.classList.contains("popup--show") && overlay.classList.contains("popup--show")) {
      popupSuccess.classList.remove("popup--show");
      overlay.classList.remove("popup--show");
    }
  }
});
