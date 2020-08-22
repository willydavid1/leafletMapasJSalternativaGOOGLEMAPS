// L es la libreria leaflet.js | map('#ID') metodo que inicializa el mapa | setView([COORDS], ZOOM) define donde estara la vista del mapa
let mymap = L.map('mymap').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2lsbHlkYXZpZDEiLCJhIjoiY2tlNXdkdzh4MTc4ZDMxbnkxcjdiNHd1YSJ9.CaTJtYRW86CriKZqVvY4nw'
}).addTo(mymap);

const geojson_url = 'https://babel.webreactiva.com/labs/arboles_singulares_en_espacios_naturales_geojson'

// marcadores
const marker = L.marker([51.5, -0.09]).addTo(mymap);

const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

// popup a marcadores
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// eventos de click podemos obtener data de donde se hizo click
const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);