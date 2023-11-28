// function affichZero(nombre) {
//     return nombre < 10 ? '0' + nombre : nombre;
//     }


// function date() {       
//     const infos = new Date();  
//     document.getElementById('date').innerHTML = `${affichZero(infos.getDate())}/${affichZero(infos.getMonth()+1)}/${affichZero(infos.getFullYear())}`
//     document.getElementById('heure').innerHTML = `${affichZero(infos.getHours())}:${affichZero(infos.getMinutes())}:${affichZero(infos.getSeconds())}`
// }


window.onload = function() {
    //date et heure recalculé toutes les 1000 millisecondes
    // setInterval(date, 1000);
    

    //position du soleil en fonction de la carte de fond
    let carte = window.document.getElementById("carte")
    let soleil = window.document.getElementById("soleil")
    
    let soleilX = (carte.offsetWidth /2) - (soleil.offsetWidth /2)
    let soleilY = (carte.offsetHeight /2) - (soleil.offsetHeight /2)
      
    soleil.style.position = 'absolute'
    soleil.style.top = soleilY +'px'
    soleil.style.left = soleilX +'px'
  

    //position de la ceinture en fonction de la carte de fond
    let ceinture = window.document.getElementById("ceinture")
    
    let ceintureX = (carte.offsetWidth /2) - (ceinture.offsetWidth /2)
    let ceintureY = (carte.offsetHeight /2) - (ceinture.offsetHeight /2)
      
    ceinture.style.position = 'absolute'
    ceinture.style.top = ceintureY +'px'
    ceinture.style.left = ceintureX +'px'

}


  // Récupère les données de l'API
    let planets = undefined

  fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    .then(response => response.json())
    .then(data => {
        planets = data.bodies.filter(body => body.isPlanet);
    })
    .catch(error => console.error("Erreur de chargement des données :", error));


    //onclick
    // document.querySelector("#soleil").onclick = function displayPlanetInfo(planet) {
    //     console.log("click")
    //     alert(`Nom : ${planet.englishName}\nMasse : ${planet.mass.massValue} ${planet.mass.massExponent}`);        
    // };
    // console.log(document.querySelector("#soleil"))
    
    //ou alors
    document.querySelector('#soleil').addEventListener('click', (event) => {
        for (const element of planets){
            console.log(element.name, element.englishName)
            alert(`Nom : ${element.name}\nEnglish Name : ${element.englishName}`)
        }



        alert(`Nom : ${soleil.englishName}\nMasse : ${soleil.mass.massValue} ${soleil.mass.massExponent}`)
        
    })
    

    

