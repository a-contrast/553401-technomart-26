var mapLink = document.querySelector(".mini-map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".close-map");
var mapFilterBackground = mapPopup.querySelector(".filter");
var buyBtns = document.querySelectorAll(".buy-btn");
var buyPopup = document.querySelector(".popup-buy-container");
var buyClose = buyPopup.querySelector(".close");
var buyPopupBtn = buyPopup.querySelector(".btn-red");
var buyFilterBackground = buyPopup.querySelector(".filter");
var feedbackLink = document.querySelector(".feedback-btn");
var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = feedbackPopup.querySelector(".close");
var feedbackFilterBackground = feedbackPopup.querySelector(".filter");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector("[name=name]");
var feedbackEmail = feedbackPopup.querySelector("[type=email]");
var feedbackLetter = feedbackPopup.querySelector("[name=letter]");


mapLink.addEventListener("click", function (evt){
  evt.preventDefault();
  mapPopup.style.display = "block";
});

mapClose.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.style.display = "none";
});

mapFilterBackground.addEventListener("click", function (evt){
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

for(var i = 0; i < buyBtns.length; i++){
  buyBtns[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.style.display = "block";
    buyPopupBtn.focus();
  })
};

buyClose.addEventListener("click", function(evt){
  evt.preventDefault();
  buyPopup.style.display = "none";
});

buyFilterBackground.addEventListener("click", function (evt){
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

feedbackLink.addEventListener("click", function (evt){
  evt.preventDefault();
  feedbackPopup.style.display = "block";
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.style.display = "none";
  feedbackPopup.classList.remove("feedback-error");
});

feedbackFilterBackground.addEventListener("click", function (evt){
  feedbackPopup.style.display = "none";
  feedbackPopup.classList.remove("feedback-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) { 
    if (feedbackPopup.style.display = "block") {
      evt.preventDefault();
      feedbackPopup.style.display = "none";
      feedbackPopup.classList.remove("feedback-error");
    }
  }
});

// feedbackForm.addEventListener("submit", function (evt) {
//   if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
//     evt.preventDefault();
//     // console.log("Нужно Заполнить Все Поля");
//     feedbackPopup.classList.add("feedback-error"); 
//   }
// }); 
