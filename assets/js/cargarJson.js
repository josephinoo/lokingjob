let cargarJSON = () => {

  fetch("assets/data/jobs.json")
    .then((resultado) => {
      return resultado.json()
    })
    .then((data) => {

      let contenedor = document.getElementById('trabajos')

      for (let dato of data) {
        console.log(dato.job)
        let seccion = document.createElement("div")
        seccion.setAttribute("class", 'single-job-items mb-30')
        seccion.innerHTML += '<div class="job-items">' +
          '<div class="company-img">' +
          '<a href="job_details.html"><img src="assets/img/icon/job-list1.png" alt=""></a>' +
          '</div>' +
          '<div href="job_details.html" class="job-tittle job-tittle2">' +
          '<a href="job_details.html">' +
          '<h4>' + dato.job + '</h4>' +
          '</a>' +
          '<ul>' +
          '<li>' + dato.workspace + '</li>' +
          '<li><i class="fas fa-map-marker-alt"></i>' + dato.city + ', ' + dato.country + '</li>' +
          '<li>' + '$' + dato.pay_inicial + '- $' + dato.pay_end + '</li>' +
          '</ul>' +
          '</div>' +
          '</div>' +
          '<div class="items-link items-link2 f-right">' +
          '<a href="job_details.html">' + dato.time + '</a>' +
          '<span>' + dato.time_publication + ' horas atras' + '</span>' +
          '</div>'

        contenedor.appendChild(seccion)

      }

    }).catch((error) => {

      console.log("Error ",error)

    })

}

//Las funciones se ejecutarán en cuanto el documento esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
  cargarJSON();
});

let buscador = document.getElementById("entrada")

buscador.oninput =()  =>{
    let input = buscador.value.toLowerCase();
    
    let item = document.getElementsByClassName("single-job-items mb-30")
    let title = document.getElementsByClassName("job-tittle job-tittle2")

    for (let i = 0; i<item.length; i++){
        titulo = title[i].textContent.toLowerCase();


        if(titulo.includes(input) ){
            
            item[i].style.display = "";
        }else{
            item[i].style.display = "none";
        }
    }
}