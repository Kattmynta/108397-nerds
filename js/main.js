var link = document.querySelector(".map .btn");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".modal-window-close");
var form = popup.querySelector("form");

// TODO: а почему тут не срабатывает form.querySelector?
var user_name = popup.querySelector(".username input");
var user_email = popup.querySelector(".email input");
var letter_text = popup.querySelector("textarea");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-window-show");
  user_name.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-window-show");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(form);
  console.log(user_name);
  console.log(user_email);
  console.log(letter_text);

  if (!user_email.value || !letter_text.value) {
    event.preventDefault();
    console.log("Oops!"); // TODO:
  }
});

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.9388571, 30.322028)
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.9388571, 30.322028);
  var beachMarker = new google.maps.Marker({position: myLatLng, map: map, icon: image});
}
google.maps.event.addDomListener(window, "load", initialize);
