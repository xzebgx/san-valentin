function aceptar() {
    const musica = document.getElementById("musica");
    musica.volume = 0.5;
    musica.play();

    document.getElementById("respuesta").innerHTML =
        "💖 Gracias por decir que sí 💖<br>" +
        "Prometo cuidarte, apoyarte y hacerte sonreír.<br>" +
        "Feliz San Valentín, Mi vida ❤️";

    lanzarCorazones();
}

function moverNo() {
    const boton = document.querySelector(".no");

    const ancho = window.innerWidth - boton.offsetWidth;
    const alto = window.innerHeight - boton.offsetHeight;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    boton.style.left = x + "px";
    boton.style.top = y + "px";
}


function lanzarCorazones() {
    for (let i = 0; i < 15; i++) {
        const corazon = document.createElement("div");
        corazon.innerHTML = "💗";
        corazon.style.position = "fixed";
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.bottom = "0";
        corazon.style.fontSize = "24px";
        corazon.style.animation = "subir 3s linear";
        document.body.appendChild(corazon);

        setTimeout(() => corazon.remove(), 3000);
    }
}
