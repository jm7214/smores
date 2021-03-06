mapboxgl.accessToken = 'pk.eyJ1Ijoiam03MjE0IiwiYSI6ImNrNnNwdjFmYTBodTczbXF4bnJzaGR1Z2oifQ.Jl92KHVxrXt33RDS85IXAg';

  // we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-73.987, 40.735]
var initialZoom = 10.67



var initOptions ={
    container: 'smore-map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: initialCenterPoint, // starting position [lng, lat]
    zoom: initialZoom, // starting zoom
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// iterate over each object in smoresData
smoresData.forEach(function(smoreslocations) {

// for each object in the smoresData, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([smoreslocations.longitude, smoreslocations.latitutde])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(`${smoreslocations.place} has ${smoreslocations.type}`))
    .addTo(map);
})

    $('#Brooklyn').on('click', function() {
      map.flyTo({
        center: [-73.96643, 40.68356],
        zoom: 12
      })
    })

    $('#Manhattan').on('click', function() {

      map.flyTo({
        center: [-73.99094, 40.76011],
        zoom: 12.5
      })
    })



    $('#nyc').on('click', function() {
      map.flyTo({
        center: initialCenterPoint,
        zoom: initialZoom
      })
})
