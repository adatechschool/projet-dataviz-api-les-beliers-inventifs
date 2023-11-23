function affichZero(nombre) {
    // cette fonction prend en paramètre un nombre
    // si ce nombre est inférieur à 10, on affiche 0 + ce nombre
    // Ex: il est 07h00
    return nombre < 10 ? '0' + nombre : nombre;
    }

function date() {
    // Cette fonction fait deux choses :
    // 1 - Elle construit une constante avec l'objet Date()
    // qui renvoie (année, mois, jour, heure, minutes, seconde, millisecondes)
    // tout ça est dans l'objet infos
     
    const infos = new Date();
     
    // 2 - La fonction attribue du texte au div id="heure_exacte"
    // ce texte n'est autre que l'heure contenue dans l'objet infos
    // on ne souhaite afficher que l'heure et les minutes avec infos.getHours()
    // et infos.getMinutes(), On Sépare par ":" Ex: il est 07:00.
     
    document.getElementById('date').innerHTML = `${affichZero(infos.getDay())}/${affichZero(infos.getMonth())}/${affichZero(infos.getFullYear())}`
    document.getElementById('heure').innerHTML = `${affichZero(infos.getHours())}:${affichZero(infos.getMinutes())}:${affichZero(infos.getSeconds())}`
}// Fin fonction dateEtHeure
     
    // Pour actualiser l'heure chaque minutes, on rappelle la fonction dateEtHeure()
    // toutes les 100 millisecondes, donc toutes les secondes
window.onload = function() {
    setInterval(date, 1000);
    
};





/*Faire une fonction qui centre le soleil.
coordonnées de l'img 'soleil' :
hauteur = (hauteur'carte' /2) - (hauteur'soleil' /2)
largeur = (largeur'carte' /2) - (largeur'soleil' /2)*/

function soleil() {
    (window.document.getElementById("carte").offsetHeight /2) - (window.document.getElementById("soleil").offsetHeight /2)

    (window.document.getElementById("carte").offsetWidth /2) - (window.document.getElementById("soleil").offsetWidth /2)
}

