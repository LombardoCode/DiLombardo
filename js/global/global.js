/* Vamos a detectar cada vez que el usuario presiona un link para hacer el efecto de transición de página */
// Cuando la página termine de cargar automaticamente le colocamos al <body> una opacidad de 1 
document.addEventListener("DOMContentLoaded", function(e) {
    document.body.classList.add("fadeIn");
});

// Detectamos todos los links de la página para que cuando el usuario los presione se haga la transición de...
// ...la página (véase transisión como dejar la opacidad del <body> en 0)
let links = document.querySelectorAll("a.link-de-navegacion");

// Les agregamos un Listener a cada link
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
        // Preveinoms la redirección de sitio (porque queremos reproducir la transición antes de que cambie la página)-
        e.preventDefault();
        // Dejamos el la opacidad del <body> en 0
        document.body.classList.remove("fadeIn");
        // Hacemos un timer de 0.5 segundos, una vez pasado el timer cambiamos a la página deseada
        setTimeout(() => {
            window.location = this.href;
        }, 500);
    });
}
