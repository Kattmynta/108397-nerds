var link = document.querySelector(".map .btn");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".modal-window-close");
var form = popup.querySelector("form");

var user_name = popup.querySelector(".username input");
var user_email = popup.querySelector(".email input");
var letter_text = popup.querySelector("textarea");

var empty_field=0;

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-window-show");
  user_name.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-window-show");
  user_name.classList.remove("modal-input-error");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!user_name.value) empty_field = user_name;
  else if (!user_email.value) empty_field = user_email;
  else if (!letter_text.value) empty_field = letter_text;
  else
  {
    form.submit();
    return;
  }

  empty_field.classList.add("modal-input-error");
  empty_field.addEventListener("input", function(event) {
    empty_field.classList.remove("modal-input-error");
  });

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
