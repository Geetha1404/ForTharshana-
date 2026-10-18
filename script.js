const openButton = document.getElementById("open-button");
const surprise = document.getElementById("surprise");
const hugButton = document.getElementById("hug-button");
const hugMessage = document.getElementById("hug-message");
const heartsContainer = document.getElementById("hearts-container");

// Reveal Tharshana's surprise message
openButton.addEventListener("click", () => {
    surprise.classList.remove("hidden");

    openButton.textContent = "Surprise opened ♡";
    openButton.disabled = true;

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

    // Make extra hearts appear!
    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// Send a virtual hug
hugButton.addEventListener("click", () => {
    hugMessage.classList.remove("hidden");
    hugButton.textContent = "Hug sent! ♡";
    hugButton.disabled = true;

    for (let i = 0; i < 8; i++) {
        setTimeout(createHeart, i * 150);
    }
});

// Create a floating heart
function createHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";

    const symbols = ["♡", "♥", "❤", "💕"];
    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Start the floating hearts
setInterval(createHeart, 650);