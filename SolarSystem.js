function affichZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
    }


function date() {       
    const infos = new Date();  
    document.getElementById('date').innerHTML = `${affichZero(infos.getDate())}/${affichZero(infos.getMonth()+1)}/${affichZero(infos.getFullYear())}`
    document.getElementById('heure').innerHTML = `${affichZero(infos.getHours())}:${affichZero(infos.getMinutes())}:${affichZero(infos.getSeconds())}`
}


window.onload = function() {
    //date et heure recalculé toutes les 1000 millisecondes
    setInterval(date, 1000);
    

    //position du soleil en fonction de la carte de fond
    let carte = window.document.getElementById("carte")
    let soleil = window.document.getElementById("soleil")
    
    let soleilX = (carte.offsetWidth /2) - (soleil.offsetWidth /2)
    let soleilY = (carte.offsetHeight /2) - (soleil.offsetHeight /2)
      
    soleil.style.position = 'absolute'
    soleil.style.top = soleilY +'px'
    soleil.style.left = soleilX +'px'
    
};



// document.addEventListener("DOMContentLoaded", () => {
//   const planetsContainer = document.getElementById("planets-container");

//   // Récupère les données de l'API
//   fetch("https://api.le-systeme-solaire.net/rest/bodies/")
//     .then(response => response.json())
//     .then(data => {
//       const planets = data.bodies.filter(body => body.isPlanet && body.englishName !== "Sun");

//       // Crée des éléments HTML pour chaque planète
//       planets.forEach(planet => {
//         const newPlanet = document.createElement("div");
//         newPlanet.className = "planet";
//         newPlanet.style.backgroundColor = getRandomColor();
//         newPlanet.style.left = `${Math.random() * 80}vw`; // Position aléatoire simple test
//         newPlanet.style.top = `${Math.random() * 80}vh`; // Position aléatoire simple test
//         newPlanet.title = planet.englishName;
//         newPlanet.onclick = () => displayPlanetInfo(planet);

//         planetsContainer.appendChild(newPlanet);
//       });

//       // Ajoute le Soleil
//       const sun = document.createElement("div");
//       sun.id = "sun";
//       sun.style.left = "40vw"; // Position du Soleil
//       sun.style.top = "40vh"; // Position du Soleil
//       sun.title = "Sun";
//       sun.onclick = () => displayPlanetInfo(data.bodies.find(body => body.englishName === "Sun"));

//       planetsContainer.appendChild(sun);
//     })
//     .catch(error => console.error("Erreur de chargement des données :", error));

//   // Fonction pour afficher les informations d'une planète qu'on pourra changer + ajout d'infos
//   function displayPlanetInfo(planet) {
//     alert(`Nom : ${planet.englishName}\nMasse : ${planet.mass.massValue} ${planet.mass.massExponent}`);
//     // Personnalisation des infos (pas d'idée pour faire plus court)
//   }

//   // Fonction pour générer une couleur aléatoire simple test
//   function getRandomColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
// });


