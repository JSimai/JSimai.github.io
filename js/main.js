function showPopup(id) {
  var popup = document.getElementById(id);
  popup.style.transform = "translateX(0%)";
}

function closePopup(id) {
  var popup = document.getElementById(id);
  popup.style.transform = "translateX(200%)";
}
