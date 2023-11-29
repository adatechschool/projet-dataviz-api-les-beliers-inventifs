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

fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,planet")
    .then(response => response.json())
    .then(data => {
        planets = data.bodies;
    })
    .catch(error => console.error("Erreur de chargement des données :", error));

    
let soleil = undefined

fetch("https://api.le-systeme-solaire.net/rest/bodies/soleil")
    .then(response => response.json())
    .then(data => {
        soleil = data;
    })
    .catch(error => console.error("Erreur de chargement des données :", error));


// let ceinture = undefined

// fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,asteroid")
//     .then(response => response.json())
//     .then(data => {
//         ceinture = data.bodies;
//     })
//     .catch(error => console.error("Erreur de chargement des données :", error));
    
//appelé pour avoir les infos sur la ceinture, mais y'a rien.


//onclick

    document.querySelector('#soleil').addEventListener('click', (event) => {   
        alert(`Nom : ${soleil.name}\nTaille : Rayon : ${soleil.meanRadius} km
Masse : ${soleil.mass.massValue} x 10(exposant ${soleil.mass.massExponent}) kg
Température de surface : 5500°C`)    
    })
    
    document.querySelector('#mercure').addEventListener('click', (event) => {    
        let mercure = planets.find(element =>element.name=="Mercure")
        console.log(planets)
        alert(`Nom : ${mercure.name}\nTaille : Rayon : ${mercure.meanRadius} km
Masse : ${mercure.mass.massValue} x 10(exposant ${mercure.mass.massExponent}) kg
Distance du Soleil : ${mercure.semimajorAxis} km\nRévolution : ${mercure.sideralOrbit} jours terrestres
Durée d'une journée : ${mercure.sideralRotation} heures`)    
            
        })
    
    document.querySelector('#venus').addEventListener('click', (event) => {    
        let venus = planets.find(element =>element.name=="Vénus")
        alert(`Nom : ${venus.name}\nTaille : Rayon : ${venus.meanRadius} km
Masse : ${venus.mass.massValue} x 10(exposant ${venus.mass.massExponent}) kg
Distance du Soleil : ${venus.semimajorAxis} km\nRévolution : ${venus.sideralOrbit} jours terrestres
Durée d'une journée : ${venus.sideralRotation} heures`)    
    })

    document.querySelector('#terre').addEventListener('click', (event) => {    
        let terre = planets.find(element =>element.name=="La Terre")
        alert(`Nom : ${terre.name}\nTaille : Rayon : ${terre.meanRadius} km
Masse : ${terre.mass.massValue} x 10(exposant ${terre.mass.massExponent}) kg
Distance du Soleil : ${terre.semimajorAxis} km\nRévolution : ${terre.sideralOrbit} jours terrestres
Durée d'une journée : ${terre.sideralRotation} heures\nNombre de lunes : ${terre.moons.length}`)    
    })

    document.querySelector('#mars').addEventListener('click', (event) => {    
        let mars = planets.find(element =>element.name=="Mars")
        alert(`Nom : ${mars.name}\nTaille : Rayon : ${mars.meanRadius} km
Masse : ${mars.mass.massValue} x 10(exposant ${mars.mass.massExponent}) kg
Distance du Soleil : ${mars.semimajorAxis} km\nRévolution : ${mars.sideralOrbit} jours terrestres
Durée d'une journée : ${mars.sideralRotation} heures\nNombre de lunes : ${mars.moons.length}`)    
    })

    // document.querySelector('#ceinture').addEventListener('click', (event) => {    
    //     let ceinture = planets.find(element =>element.name=="Ceinture")
    //     alert(`Nom : ${ceinture.name}\nTaille : ${ceinture.meanRadius} km\nMasse : ${ceinture.mass.massValue} x 10(exposant ${mercure.mass.massExponent}) kg\nDistance du Soleil : ${mercure.semimajorAxis} km\nRévolution : ${mercure.sideralOrbit} jours terrestres\nDurée d'une journée : ${mercure.sideralRotation} heures`)    
    // })

    document.querySelector('#jupiter').addEventListener('click', (event) => {   
        let jupiter = planets.find(element =>element.name=="Jupiter")
        alert(`Nom : ${jupiter.name}\nTaille : Rayon : ${jupiter.meanRadius} km
Masse : ${jupiter.mass.massValue} x 10(exposant ${jupiter.mass.massExponent}) kg
Distance du Soleil : ${jupiter.semimajorAxis} km\nRévolution : ${jupiter.sideralOrbit} jours terrestres
Durée d'une journée : ${jupiter.sideralRotation} heures\nNombre de lunes : ${jupiter.moons.length}`)    
    })

    document.querySelector('#saturne').addEventListener('click', (event) => {   
        let saturne = planets.find(element =>element.name=="Saturne")
        alert(`Nom : ${saturne.name}\nTaille : Rayon : ${saturne.meanRadius} km
Masse : ${saturne.mass.massValue} x 10(exposant ${saturne.mass.massExponent}) kg
Distance du Soleil : ${saturne.semimajorAxis} km\nRévolution : ${saturne.sideralOrbit} jours terrestres
Durée d'une journée : ${saturne.sideralRotation} heures\nNombre de lunes : ${saturne.moons.length}`)    
    })

    document.querySelector('#uranus').addEventListener('click', (event) => {   
        let uranus = planets.find(element =>element.name=="Uranus")
        alert(`Nom : ${uranus.name}\nTaille : Rayon : ${uranus.meanRadius} km
Masse : ${uranus.mass.massValue} x 10(exposant ${uranus.mass.massExponent}) kg
Distance du Soleil : ${uranus.semimajorAxis} km\nRévolution : ${uranus.sideralOrbit} jours terrestres
Durée d'une journée : ${uranus.sideralRotation} heures\nNombre de lunes : ${uranus.moons.length}`)    
    })

    document.querySelector('#neptune').addEventListener('click', (event) => {  
        let neptune = planets.find(element =>element.name=="Neptune")
        alert(`Nom : ${neptune.name}\nTaille : Rayon : ${neptune.meanRadius} km
Masse : ${neptune.mass.massValue} x 10(exposant ${neptune.mass.massExponent}) kg
Distance du Soleil : ${neptune.semimajorAxis} km\nRévolution : ${neptune.sideralOrbit} jours terrestres
Durée d'une journée : ${neptune.sideralRotation} heures\nNombre de lunes : ${neptune.moons.length}`)    
    })


//pas d'infos sur la ceinture. supprimer le fetch et le query. supprimer le pointeur. supprimer l'image ??
