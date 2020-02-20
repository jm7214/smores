mapboxgl.accessToken = 'pk.eyJ1Ijoiam03MjE0IiwiYSI6ImNrNnNwdjFmYTBodTczbXF4bnJzaGR1Z2oifQ.Jl92KHVxrXt33RDS85IXAg';

  // we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-73.987, 40.735]
var initialZoom = 10.67



var initOptions = new mapboxgl.Map({
    container: 'smore-map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: initialCenterPoint, // starting position [lng, lat]
    zoom: initialZoom, // starting zoom
});

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// iterate over each object in studentData
smoresData.forEach(function(smoresLotions) {
  // for each object in the studentData, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([smoresLocations.longitude, smoresLotions.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .addTo(map);
})
