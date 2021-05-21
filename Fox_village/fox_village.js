alert("Faites attention, il n'y a rien de plus mignon !");

var mymap = L.map('mapid').setView([38.596796512317034, 136.71188299685696], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//Sendai
var marker = L.marker([38.268215, 140.8693558]).addTo(mymap);
marker.bindPopup("<b>Sendai</b>").openPopup();

//Tokyo marker
var marker = L.marker([35.6761919, 139.6503106]).addTo(mymap);
marker.bindPopup("<b>Tokyo</b>").openPopup();

//Osaka
var marker = L.marker([34.6937249, 135.50225350000005]).addTo(mymap);
marker.bindPopup("<b>Osaka</b>").openPopup();

//FOX VILLAGE
var marker = L.marker([38.040828357341574, 140.53036160767078]).addTo(mymap);
marker.bindPopup("<b>Fox Village</b><br>ici, au Japon").openPopup();