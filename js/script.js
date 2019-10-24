var mapLink = document.querySelector(".mini-map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".close-map");

console.log("dcdvfgngfh,jmnbxfn")
mapLink.onclick = function(evt) {
  evt.preventDefault();
  mapPopup.style.display = "block";
}