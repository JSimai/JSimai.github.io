// showPopup();
// closePopup();
toggleSearch();
// toggleMobileMenu();



function showPopup(id) {
  var popup = document.getElementById(id);
  popup.style.transform = "translateX(0%)";
}

function closePopup(id) {
  var popup = document.getElementById(id);
  popup.style.transform = "translateX(200%)";
}

function showSearch() {
  var search = document.getElementById("searchBar");
  var box = document.getElementById("backBox");
  search.style.display = "flex";
  box.style.display = "flex";
}

function closeSearch() {
  var search = document.getElementById("searchBar");
  var box = document.getElementById("backBox");
  search.style.display = "none";
  box.style.display = "none";
}

function showMobileMenu (id) {
  var menu = document.getElementById(id);
  menu.style.display = "flex";
}

function closeMobileMenu (id) {
  var menu = document.getElementById(id);
  menu.style.display = "none";
}

function toggleMobileMenu (id) {
  var menu = document.getElementById(id);
  menu.style.display = "none";
}

function handleForm() {
  var form = document.getElementById("loginCont");
  var greeting = document.getElementById("greeting");
  form.style.display = "none";
  greeting.style.display = "flex";
}

function logout() {
  var form = document.getElementById("loginCont");
  var greeting = document.getElementById("greeting");
  greeting.style.display = "none";
  form.style.display = "block";
}

function selectOn(id, id1, id2) {
  var element = document.getElementById(id);
  var element1 = document.getElementById(id1);
  var element2 = document.getElementById(id2);
  element.style.display = "flex";
  element1.style.display = "flex";
  element2.style.display = "none";
}

function selectOff(id, id1, id2) {
  var element = document.getElementById(id);
  var element1 = document.getElementById(id1);
  var element2 = document.getElementById(id2);
  element.style.display = "none";
  element1.style.display = "none";
  element2.style.display = "flex";
}
