var buyBtns = document.querySelectorAll(".buy-btn");
var buyPopup = document.querySelector(".popup-buy-container");
var buyClose = buyPopup.querySelector(".close");

for (var i = 0; i < buyBtns.length; i++) {
  buyBtns[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.style.display = "block";
  })
};

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.style.display = "none";
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.style.display = "block") {
      evt.preventDefault();
      buyPopup.style.display = "none";
    }
  }
});

if (document.querySelector('.index')) {

  var mapLink = document.querySelector(".mini-map");
  var mapPopup = document.querySelector(".popup-map");
  var mapBig = mapPopup.querySelector("iframe");
  var mapClose = mapPopup.querySelector(".close-map");
  var buyPopupBtn = buyPopup.querySelector(".btn-red");
  var feedbackLink = document.querySelector(".feedback-btn");
  var feedbackPopup = document.querySelector(".popup-feedback");
  var feedbackClose = feedbackPopup.querySelector(".close");
  var feedbackForm = feedbackPopup.querySelector(".feedback-form");
  var feedbackFormContainer = feedbackPopup.querySelector(".feedback");
  var feedbackName = feedbackPopup.querySelector("[name=name]");
  var feedbackEmail = feedbackPopup.querySelector("[type=email]");
  var feedbackLetter = feedbackPopup.querySelector("[name=letter]");
  var sliderBtnLeft = document.querySelector(".btn-left");
  var sliderBtnRight = document.querySelector(".btn-right");
  var sliderPaginitationLeft = document.querySelector(".indicator-left");
  var sliderPaginitationRight = document.querySelector(".indicator-right");
  var slideFirtst = document.querySelector(".slide-1");
  var slideSecond = document.querySelector(".slide-2");
  var servicesLinkFirst = document.querySelector(".service-btn:nth-child(1) .service-link");
  var servicesLinkSecond = document.querySelector(".service-btn:nth-child(2) .service-link");
  var servicesLinkThird = document.querySelector(".service-btn:nth-child(3) .service-link");
  var servicesSlideFirst = document.querySelector(".delivery");
  var servicesSlideSecond = document.querySelector(".guaranty");
  var servicesSlideThird = document.querySelector(".credit");

  sliderBtnRight.onclick = function () {
    slideFirtst.classList.add("visually-hidden");
    slideSecond.classList.remove("visually-hidden");
    sliderPaginitationLeft.classList.remove("indicator-active");
    sliderPaginitationRight.classList.add("indicator-active");
  };

  sliderBtnLeft.onclick = function () {
    slideFirtst.classList.remove("visually-hidden");
    slideSecond.classList.add("visually-hidden");
    sliderPaginitationLeft.classList.add("indicator-active");
    sliderPaginitationRight.classList.remove("indicator-active");
  };

  sliderPaginitationLeft.onclick = function () {
    slideFirtst.classList.remove("visually-hidden");
    slideSecond.classList.add("visually-hidden");
    sliderPaginitationLeft.classList.add("indicator-active");
    sliderPaginitationRight.classList.remove("indicator-active");
  };

  sliderPaginitationRight.onclick = function () {
    slideFirtst.classList.add("visually-hidden");
    slideSecond.classList.remove("visually-hidden");
    sliderPaginitationLeft.classList.remove("indicator-active");
    sliderPaginitationRight.classList.add("indicator-active");
  };

  servicesLinkFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesLinkSecond.classList.remove("service-link-active");
    servicesLinkThird.classList.remove("service-link-active");
    servicesSlideSecond.classList.remove("service-inf-active");
    servicesSlideThird.classList.remove("service-inf-active");
    servicesLinkFirst.classList.add("service-link-active");
    servicesSlideFirst.classList.add("service-inf-active");
  });

  servicesLinkSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesLinkFirst.classList.remove("service-link-active");
    servicesLinkThird.classList.remove("service-link-active");
    servicesSlideFirst.classList.remove("service-inf-active");

    servicesSlideThird.classList.remove("service-inf-active");
    servicesLinkSecond.classList.add("service-link-active");
    servicesSlideSecond.classList.add("service-inf-active");
  });

  servicesLinkThird.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesLinkSecond.classList.remove("service-link-active");
    servicesLinkFirst.classList.remove("service-link-active");
    servicesSlideSecond.classList.remove("service-inf-active");
    servicesSlideFirst.classList.remove("service-inf-active");
    servicesLinkThird.classList.add("service-link-active");
    servicesSlideThird.classList.add("service-inf-active");
  });

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.style.display = "block";
    mapBig.focus()
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.style.display = "none";
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.style.display = "block") {
        evt.preventDefault();
        mapPopup.style.display = "none";
      }
    }
  });

  feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.style.display = "block";
    feedbackName.focus();
  });

  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.style.display = "none";
    feedbackFormContainer.classList.remove("feedback-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopup.style.display = "block") {
        evt.preventDefault();
        feedbackPopup.style.display = "none";
        feedbackFormContainer.classList.remove("feedback-error");
      }
    }
  });

  feedbackPopup.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
      evt.preventDefault();
      feedbackFormContainer.classList.remove("feedback-error");
      feedbackFormContainer.offsetWidth = feedbackFormContainer.offsetWidth;
      feedbackFormContainer.classList.add("feedback-error");
    }
  });

}
