var feedback = document.querySelector("feedback");
var popupFailure = document.querySelector(".popup--failure");
var popupSuccess = document.querySelector(".popup--success");
var overlay = document.querySelector(".popup-overlay");
var firstName = feedback.querySelector("[name=first-name]");
var secondName = feedback.querySelector("[name=second-name]");
var tel = feedback.querySelector("[name=tel]");
var mail = feedback.querySelector("[name=mail]");
var feedbackBTN = feedback.querySelector(".feedback__btn");
var closeFailure = popupFailure.querySelector(".popup__btn-ok");
var closeSuccess = popupSuccess.querySelector(".popup__but-close");

feedbackBTN.addEventListener("click", function(event) {
  event.preventDefault();
  if (!firstName.value || !secondName.value || !tel.value || !mail.value) {
    popupFailure.classList.add("popup-show");
    closeFailure.focus();
  } else {
    popupSuccess.classList.add("popup-show");
    closeSuccess.focus();
  }
});

closeFailure.addEventListener("click", function (event) {
  event.preventDefault();
  popupFailure.classList.remove("popup-show");
});

closeSuccess.addEventListener("click", function (event) {
  event.preventDefault();
  popupSuccess.classList.remove("popup-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (cart.classList.contains("popup-show") && overlay.classList.contains("popup-show")) {
      cart.classList.remove("popup-show");
      overlay.classList.remove("popup-show");
    }
    if (feedback.classList.contains("popup-show") && overlay.classList.contains("popup-show")) {
      feedback.classList.remove("popup-show","popup-error");
      overlay.classList.remove("popup-show");
    }
    if (maps.classList.contains("popup-show") && overlay.classList.contains("popup-show")) {
      maps.classList.remove("popup-show");
      overlay.classList.remove("popup-show");
    }
  }
});
