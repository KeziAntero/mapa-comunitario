
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;


// create map
const map = L.map('mapid').setView([lat, lng], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "/images/maker.png",
    iconSize: [68, 58],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {

    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/community?id=${id}"><img src="/images/arrow-white.svg" > </a>`)


    // create and add marker
    L
    .marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup('Você está aqui.')
    .bindPopup(popup)
}



const communitysSpan = document.querySelectorAll('.communitys span')

communitysSpan.forEach( span => {
    const community = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(community)    
})

})

 
} else {
    document.getElementById('geolocation not available');
  }

  function toggleMenu(){
    let aside = document.querySelector('aside');
    let toggle = document.querySelector('.toggle');
    aside.classList.toggle('active');
    toggle.classList.toggle('active')
}