// Mensajes de ánimo
var mensajes = [
    "¡Eres tan adorable como Cinnamoroll! ☁️",
    "Las nubes y las estrellas siempre te acompañan ✨",
    "Sonríe ",
    "¡Vuela alto entre las nubes! ☁️",
    "Nunca dejes de soñar ⭐",
    "Tu ternura ilumina el día ☀️",
    "¡Hoy es un buen día para sonreír! 😊",
    "Siempre hay esperanza, nunca te rindas ☁️",
    "Eres capaz de lograr todo lo que te propongas 💪",
    "Tu sonrisa puede iluminar el día de cualquiera 🌈",
    "Recuerda que eres muy especial 💙",
    "Después de la lluvia, siempre sale el sol ☀️",
    "Confía en ti, tienes un gran corazón 💖",
    "Cada día es una nueva oportunidad para ser feliz 🌸",
    "¡No estás sola, siempre hay alguien que te quiere! 🫂",
    "Eres más fuerte de lo que imaginas 💫",
    "¡Sigue adelante, lo mejor está por venir! 🚀"
];
// Emojis para nubes, estrellas y caritas
var nubesEmojis = ['☁️', '🌥️', '⛅', '☁️'];
var estrellasEmojis = ['✨', '⭐', '🌟', '💫'];
// Crear nubes animadas
function crearNubes() {
    var nubesContainer = document.querySelector('.nubes');
    if (!nubesContainer)
        return;
    for (var i = 0; i < 7; i++) {
        var nube = document.createElement('div');
        nube.style.width = "".concat(60 + Math.random() * 60, "px");
        nube.style.height = "".concat(30 + Math.random() * 20, "px");
        nube.style.left = "".concat(Math.random() * 90, "%");
        nube.style.bottom = "".concat(Math.random() * 60, "px");
        nube.style.animationDuration = "".concat(4 + Math.random() * 4, "s");
        nubesContainer.appendChild(nube);
    }
}
// Crear estrellas animadas
function crearEstrellas() {
    var estrellasContainer = document.querySelector('.estrellas');
    if (!estrellasContainer)
        return;
    for (var i = 0; i < 10; i++) {
        var estrella = document.createElement('div');
        estrella.textContent = estrellasEmojis[Math.floor(Math.random() * estrellasEmojis.length)];
        estrella.style.left = "".concat(Math.random() * 95, "%");
        estrella.style.bottom = "".concat(Math.random() * 60 + 20, "px");
        estrella.style.fontSize = "".concat(22 + Math.random() * 10, "px");
        estrella.style.animationDuration = "".concat(2 + Math.random() * 2, "s");
        estrellasContainer.appendChild(estrella);
    }
}
// Crear nubes flotantes en el footer
function crearNubesFooter() {
    var nubesFooter = document.querySelector('.floating-nubes');
    if (!nubesFooter)
        return;
    setInterval(function () {
        var nube = document.createElement('div');
        nube.style.width = "".concat(50 + Math.random() * 40, "px");
        nube.style.height = "".concat(25 + Math.random() * 15, "px");
        nube.style.left = "".concat(Math.random() * 95, "%");
        nube.style.bottom = '0';
        nube.style.opacity = '0.8';
        nube.style.animation = "nubeFlotar 6s infinite alternate";
        nubesFooter.appendChild(nube);
        setTimeout(function () { return nube.remove(); }, 7000);
    }, 1200);
}
// Cambiar mensajes
function cambiarMensaje() {
    var messageElement = document.querySelector('.message-title');
    if (!messageElement)
        return;
    var currentIndex = 0;
    setInterval(function () {
        currentIndex = (currentIndex + 1) % mensajes.length;
        messageElement.style.opacity = '0';
        setTimeout(function () {
            messageElement.textContent = mensajes[currentIndex];
            messageElement.style.opacity = '1';
        }, 500);
    }, 3500);
}
// Agregar estilos de animación extra
var style = document.createElement('style');
style.textContent = "\n    @keyframes float {\n        0% { transform: translateY(0) rotate(0deg); }\n        50% { transform: translateY(-20px) rotate(10deg); }\n        100% { transform: translateY(0) rotate(0deg); }\n    }\n    @keyframes fly {\n        0% { transform: translate(0, 0) rotate(0deg); }\n        25% { transform: translate(50px, -50px) rotate(10deg); }\n        50% { transform: translate(100px, 0) rotate(0deg); }\n        75% { transform: translate(50px, 50px) rotate(-10deg); }\n        100% { transform: translate(0, 0) rotate(0deg); }\n    }\n    @keyframes twinkle {\n        0% { opacity: 0.3; }\n        50% { opacity: 0.8; }\n        100% { opacity: 0.3; }\n    }\n    @keyframes moveStar {\n        0% { transform: translateY(0); }\n        100% { transform: translateY(20px); }\n    }\n    @keyframes floatUp {\n        0% { transform: translateY(0); opacity: 0.7; }\n        100% { transform: translateY(-100px); opacity: 0; }\n    }\n    @keyframes heartBeat {\n        0%, 100% { transform: scale(1); }\n        20% { transform: scale(1.2); }\n        40% { transform: scale(0.9); }\n        60% { transform: scale(1.1); }\n        80% { transform: scale(0.95); }\n    }\n    .message-title {\n        transition: opacity 0.5s ease;\n    }\n";
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', function () {
    crearNubes();
    crearEstrellas();
    crearNubesFooter();
    cambiarMensaje();
});
