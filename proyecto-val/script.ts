// Mensajes de ánimo
const mensajes = [
    "¡Eres tan adorable como Cinnamoroll! ☁️",
    "Las nubes y las estrellas siempre te acompañan ✨",
    "Sonríe como Cinnamoroll 😊",
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
const nubesEmojis = ['☁️', '🌥️', '⛅', '☁️'];
const estrellasEmojis = ['✨', '⭐', '🌟', '💫'];

// Crear nubes animadas
function crearNubes() {
    const nubesContainer = document.querySelector('.nubes');
    if (!nubesContainer) return;
    for (let i = 0; i < 7; i++) {
        const nube = document.createElement('div');
        nube.style.width = `${60 + Math.random() * 60}px`;
        nube.style.height = `${30 + Math.random() * 20}px`;
        nube.style.left = `${Math.random() * 90}%`;
        nube.style.bottom = `${Math.random() * 60}px`;
        nube.style.animationDuration = `${4 + Math.random() * 4}s`;
        nubesContainer.appendChild(nube);
    }
}

// Crear estrellas animadas
function crearEstrellas() {
    const estrellasContainer = document.querySelector('.estrellas');
    if (!estrellasContainer) return;
    for (let i = 0; i < 10; i++) {
        const estrella = document.createElement('div');
        estrella.textContent = estrellasEmojis[Math.floor(Math.random() * estrellasEmojis.length)];
        estrella.style.left = `${Math.random() * 95}%`;
        estrella.style.bottom = `${Math.random() * 60 + 20}px`;
        estrella.style.fontSize = `${22 + Math.random() * 10}px`;
        estrella.style.animationDuration = `${2 + Math.random() * 2}s`;
        estrellasContainer.appendChild(estrella);
    }
}

// Crear nubes flotantes en el footer
function crearNubesFooter() {
    const nubesFooter = document.querySelector('.floating-nubes');
    if (!nubesFooter) return;
    setInterval(() => {
        const nube = document.createElement('div');
        nube.style.width = `${50 + Math.random() * 40}px`;
        nube.style.height = `${25 + Math.random() * 15}px`;
        nube.style.left = `${Math.random() * 95}%`;
        nube.style.bottom = '0';
        nube.style.opacity = '0.8';
        nube.style.animation = `nubeFlotar 6s infinite alternate`;
        nubesFooter.appendChild(nube);
        setTimeout(() => nube.remove(), 7000);
    }, 1200);
}

// Cambiar mensajes
function cambiarMensaje() {
    const messageElement = document.querySelector('.message-title') as HTMLElement;
    if (!messageElement) return;
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % mensajes.length;
        messageElement.style.opacity = '0';
        setTimeout(() => {
            messageElement.textContent = mensajes[currentIndex];
            messageElement.style.opacity = '1';
        }, 500);
    }, 3500);
}

// Agregar estilos de animación extra
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
        100% { transform: translateY(0) rotate(0deg); }
    }
    @keyframes fly {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(50px, -50px) rotate(10deg); }
        50% { transform: translate(100px, 0) rotate(0deg); }
        75% { transform: translate(50px, 50px) rotate(-10deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
    }
    @keyframes twinkle {
        0% { opacity: 0.3; }
        50% { opacity: 0.8; }
        100% { opacity: 0.3; }
    }
    @keyframes moveStar {
        0% { transform: translateY(0); }
        100% { transform: translateY(20px); }
    }
    @keyframes floatUp {
        0% { transform: translateY(0); opacity: 0.7; }
        100% { transform: translateY(-100px); opacity: 0; }
    }
    @keyframes heartBeat {
        0%, 100% { transform: scale(1); }
        20% { transform: scale(1.2); }
        40% { transform: scale(0.9); }
        60% { transform: scale(1.1); }
        80% { transform: scale(0.95); }
    }
    .message-title {
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    crearNubes();
    crearEstrellas();
    crearNubesFooter();
    cambiarMensaje();
}); 