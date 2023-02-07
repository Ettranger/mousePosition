//Utilise tes connaissances en matière de DOM pour afficher et mettre à jour la position de la souris chaque fois que l'utilisateur déplace la souris sur l'écran.
//Tu dois utiliser innerHTML et un template string pour modifier le texte de title-cursor-position.


const titleCursorPosition = document.querySelector("#title-cursor-position")


document.body.addEventListener("mousemove", (event)=> {
    titleCursorPosition.innerHTML = `x:${event.clientX}, y:${event.clientY} `
    titleCursorPosition.style.height = '100vh'
})
