function showPopup(id) {
  var popup = document.getElementById(id);
  popup.style.transform = "translateX(0%)";
}

function closePopup(id) {
  var popup = document.getElementById(id);
  popup.style.transform = "translateX(200%)";
}

function toggleSearch() {
  var search = document.getElementById("searchBar");
  var box = document.getElementById("backBox");
  if (search.style.display === "none") {
    search.style.display = "flex";
    box.style.display = "flex";
  } else {
    search.style.display = "none";
    box.style.display = "none";
  }
}

function toggleMobileMenu (id) {
  var menu = document.getElementById(id);
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
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

function select(id, id1) {
  var element = document.getElementById(id);
  var element1 = document.getElementById(id1);
  if (element.style.display === "none") {
  element.style.display = "flex";
  }
  else {
  element.style.display = "none";
  }
  if (element1.style.display === "none") {
  element1.style.display = "flex";
  }
  else {
  element1.style.display = "none";
  }
}
