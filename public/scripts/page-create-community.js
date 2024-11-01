
    

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
    iconSize: [60, 40],
    iconAnchor: [29, 68]
})


let marker;


// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})



})

 
} else {
    document.getElementById('geolocation not available');
  }

  
// adicionar o campo de fotos
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // verificar se o campo está vazio, se sim, nao adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
} 

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();

}


// select yes or no
function toggleSelect(event) {

    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active') 
    })
    
    // colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

function validate(event) {

    // validar se lat e lng estao preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
    
}

/*desabilita o botão no início
document.getElementById("botao").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("input-block").addEventListener("input-block", function(event){

  //busca conteúdo do input
    var conteudo = document.getElementById("input-block").value;

    //valida conteudo do input 
    if (conteudo == null && conteudo !== '') {
      //habilita o botão
      document.getElementById("botao").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("botao").disabled = true;
    }
});*/