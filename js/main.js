
var link = document.querySelector(".map .btn");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".modal-window-close");
var form = popup.querySelector("form");

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
  user_name.classList.remove("modal-input-error");
});

form.addEventListener("submit", function(event) {
  if (!user_name.value || !user_email.value || !letter_text.value) {
    event.preventDefault();
    if (!user_name.value) {
      event.preventDefault();
      user_name.classList.add("modal-input-error");
      if (user_name.addEventListener("focus", function(event) {
          event.preventDefault();
          user_name.classList.remove("modal-input-error");
        })) {}
    }
    if (!user_email.value) {
      event.preventDefault();
      user_email.classList.add("modal-input-error");
      if (user_email.addEventListener("focus", function(event) {
          event.preventDefault();
          user_email.classList.remove("modal-input-error");
        })) {}
    }
    if (!letter_text.value) {
      event.preventDefault();
      letter_text.classList.add("modal-input-error");
      if (letter_text.addEventListener("focus", function(event) {
          event.preventDefault();
          letter_text.classList.remove("modal-input-error");
        })) {}
    }
  } else
    form.submit();
});

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.9388571, 30.322028)
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.9388571, 30.322028);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
