function affichZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
    }


function date() {       
    const infos = new Date();  
      
    document.getElementById('date').innerHTML = `${affichZero(infos.getDay())}/${affichZero(infos.getMonth()+1)}/${affichZero(infos.getFullYear())}`
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
    
    console.log(soleilX)
    
    soleil.style.position = 'absolute'
    soleil.style.top = soleilY +'px'
    soleil.style.left = soleilX +'px'
    
};







fetch("SolarSystem.json")
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );