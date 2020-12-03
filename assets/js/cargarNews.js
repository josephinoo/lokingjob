let cargarNoticias = () => {

  fetch("assets/data/news.json")
    .then((resultado) => {
      return resultado.json()
    })
    .then((data) => {

      let contenedor = document.getElementById('noticias')

      for (let dato of data) {
        console.log(dato.titulo)
        let seccion = document.createElement("div")
        seccion.setAttribute("class", 'card mb-3')
        seccion.innerHTML += '<img class="card-img-top" src="assets/img/news/'+dato.img_emp+'.png" alt="Card image cap">'+
        '<div class="card-body">'+
            '<h5 class="card-title">'+dato.titulo+'</h5>'+
            '<p class="card-text">'+dato.descripcion+'</p>'+
            '<p class="card-text"><small class="text-muted"> Última actualización hace ' +dato.time_publication+ ' minutos</small></p>'+
        '</div>'

        contenedor.appendChild(seccion)

      }

    }).catch((error) => {

      console.log("Error ",error)

    })

}

//Las funciones se ejecutarán en cuanto el documento esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
  cargarNoticias();
});

let buscador = document.getElementById("entrada")

buscador.oninput =()  =>{
    let input = buscador.value.toLowerCase();
    
    let cards = document.getElementsByClassName("card mb-3")
    let title = document.getElementsByClassName("card-title")
    let text = document.getElementsByClassName("card-text")
    for (let i = 0; i<cards.length; i++){
        titulo = title[i].textContent.toLowerCase();
        texto = text[i].textContent.toLowerCase();

        if(titulo.includes(input) || texto.includes(input)){
            
            cards[i].style.display = "";
        }else{
            cards[i].style.display = "none";
        }
    }
}