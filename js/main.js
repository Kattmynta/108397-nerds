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