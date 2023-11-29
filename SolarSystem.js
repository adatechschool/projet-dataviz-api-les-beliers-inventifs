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

<<<<<<< HEAD
document.getElementById("carte").addEventListener("click", function(){



   // Récupère les données de l'API
   fetch("https://api.le-systeme-solaire.net/rest/bodies/")
     .then(response => response.json())
     .then(data => {
       const planets = data.bodies.filter(body => body.isPlanet && body.englishName !== "soleil");

     })
//       // Crée des éléments HTML pour chaque planète
//       planets.forEach(planet => {
//         const newPlanet = document.createElement("div");
//         newPlanet.className = "planet";
//         newPlanet.style.backgroundColor = getRandomColor();
//         newPlanet.style.left = `${Math.random() * 80}vw`; // Position aléatoire simple test
//         newPlanet.style.top = `${Math.random() * 80}vh`; // Position aléatoire simple test
//         newPlanet.title = planet.englishName;
//         newPlanet.onclick = () => displayPlanetInfo(planet);
=======
  fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    .then(response => response.json())
    .then(data => {
        planets = data.bodies.filter(body => body.isPlanet);
    })
    .catch(error => console.error("Erreur de chargement des données :", error));

>>>>>>> 513ad0d3e4f1dac3af657bb763dc964a4276f226

    //onclick
    // document.querySelector("#soleil").onclick = function displayPlanetInfo(planet) {
    //     console.log("click")
    //     alert(`Nom : ${planet.englishName}\nMasse : ${planet.mass.massValue} ${planet.mass.massExponent}`);        
    // };
    // console.log(document.querySelector("#soleil"))
    
    //ou alors

<<<<<<< HEAD
//       // Ajoute le Soleil
//       const sun = document.createElement("div");
//       soleil.id = "soleil";
//       sun.style.left = "40vw"; // Position du Soleil
//       sun.style.top = "40vh"; // Position du Soleil
//       soleil.title = "Sun";
//       soleil.onclick = () => displayPlanetInfo(data.bodies.find(body => body.englishName === "Sun"));

//       planetsContainer.appendChild(sun);
//     })
     .catch(error => console.error("Erreur de chargement des données :", error));

//   // Fonction pour afficher les informations d'une planète qu'on pourra changer + ajout d'infos
   function displayPlanetInfo(planet) {
     alert(`Nom : ${planet.englishName}\nMasse : ${planet.mass.massValue} ${planet.mass.massExponent}`);
     // Personnalisation des infos (pas d'idée pour faire plus court)
   }

//   // Fonction pour générer une couleur aléatoire simple test
//   function getRandomColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
 });
=======

    document.querySelector('#soleil').addEventListener('click', (event) => {   
        let soleil = planets.find(element =>element.name=="Soleil")
        alert(`Nom : ${soleil.name}\nTaille : Rayon : ${soleil.meanRadius} km\nMasse : ${soleil.mass.massValue} x 10(exposant ${soleil.mass.massExponent}) kg`)    
     })
    
    document.querySelector('#mercure').addEventListener('click', (event) => {    
        let mercure = planets.find(element =>element.name=="Mercure")
        console.log(planets)
        alert(`Nom : ${mercure.name}\nTaille : Rayon : ${mercure.meanRadius} km\nMasse : ${mercure.mass.massValue} x 10(exposant ${mercure.mass.massExponent}) kg\nDistance du Soleil : ${mercure.semimajorAxis} km\nRévolution : ${mercure.sideralOrbit} jours terrestres\nDurée d'une journée : ${mercure.sideralRotation} heures`)    
    })
    
    document.querySelector('#venus').addEventListener('click', (event) => {    
        let venus = planets.find(element =>element.name=="Vénus")
        alert(`Nom : ${venus.name}\nTaille : Rayon : ${venus.meanRadius} km\nMasse : ${venus.mass.massValue} x 10(exposant ${venus.mass.massExponent}) kg\nDistance du Soleil : ${venus.semimajorAxis} km\nRévolution : ${venus.sideralOrbit} jours terrestres\nDurée d'une journée : ${venus.sideralRotation} heures`)    
    })

    document.querySelector('#terre').addEventListener('click', (event) => {    
        let terre = planets.find(element =>element.name=="La Terre")
        alert(`Nom : ${terre.name}\nTaille : Rayon : ${terre.meanRadius} km\nMasse : ${terre.mass.massValue} x 10(exposant ${terre.mass.massExponent}) kg\nDistance du Soleil : ${terre.semimajorAxis} km\nRévolution : ${terre.sideralOrbit} jours terrestres\nDurée d'une journée : ${terre.sideralRotation} heures`)    
    })

    document.querySelector('#mars').addEventListener('click', (event) => {    
        let mars = planets.find(element =>element.name=="Mars")
        alert(`Nom : ${mars.name}\nTaille : Rayon : ${mars.meanRadius} km\nMasse : ${mars.mass.massValue} x 10(exposant ${mars.mass.massExponent}) kg\nDistance du Soleil : ${mars.semimajorAxis} km\nRévolution : ${mars.sideralOrbit} jours terrestres\nDurée d'une journée : ${mars.sideralRotation} heures`)    
    })

    document.querySelector('#ceinture').addEventListener('click', (event) => {    
        let ceinture = planets.find(element =>element.name=="Ceinture")
        alert(`Nom : ${ceinture.name}\nTaille : ${ceinture.meanRadius} km\nMasse : ${ceinture.mass.massValue} x 10(exposant ${mercure.mass.massExponent}) kg\nDistance du Soleil : ${mercure.semimajorAxis} km\nRévolution : ${mercure.sideralOrbit} jours terrestres\nDurée d'une journée : ${mercure.sideralRotation} heures`)    
    })

    document.querySelector('#jupiter').addEventListener('click', (event) => {   
        let jupiter = planets.find(element =>element.name=="Jupiter")
        alert(`Nom : ${jupiter.name}\nTaille : Rayon : ${jupiter.meanRadius} km\nMasse : ${jupiter.mass.massValue} x 10(exposant ${jupiter.mass.massExponent}) kg\nDistance du Soleil : ${jupiter.semimajorAxis} km\nRévolution : ${jupiter.sideralOrbit} jours terrestres\nDurée d'une journée : ${jupiter.sideralRotation} heures`)    
    })

    document.querySelector('#saturne').addEventListener('click', (event) => {   
        let saturne = planets.find(element =>element.name=="Saturne")
        alert(`Nom : ${saturne.name}\nTaille : Rayon : ${saturne.meanRadius} km\nMasse : ${saturne.mass.massValue} x 10(exposant ${saturne.mass.massExponent}) kg\nDistance du Soleil : ${saturne.semimajorAxis} km\nRévolution : ${saturne.sideralOrbit} jours terrestres\nDurée d'une journée : ${saturne.sideralRotation} heures`)    
    })

    document.querySelector('#uranus').addEventListener('click', (event) => {   
        let uranus = planets.find(element =>element.name=="Uranus")
        alert(`Nom : ${uranus.name}\nTaille : Rayon : ${uranus.meanRadius} km\nMasse : ${uranus.mass.massValue} x 10(exposant ${uranus.mass.massExponent}) kg\nDistance du Soleil : ${uranus.semimajorAxis} km\nRévolution : ${uranus.sideralOrbit} jours terrestres\nDurée d'une journée : ${uranus.sideralRotation} heures`)    
    })

    document.querySelector('#neptune').addEventListener('click', (event) => {  
        let neptune = planets.find(element =>element.name=="Neptune")
        alert(`Nom : ${neptune.name}\nTaille : Rayon : ${neptune.meanRadius} km\nMasse : ${neptune.mass.massValue} x 10(exposant ${neptune.mass.massExponent}) kg\nDistance du Soleil : ${neptune.semimajorAxis} km\nRévolution : ${neptune.sideralOrbit} jours terrestres\nDurée d'une journée : ${neptune.sideralRotation} heures`)    
    })

>>>>>>> 513ad0d3e4f1dac3af657bb763dc964a4276f226
