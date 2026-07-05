const username = localStorage.getItem("username");
const avatar = localStorage.getItem("avatar");

const welcome = document.getElementById("welcome");

if (username && avatar) {
    welcome.innerHTML = `${avatar} Welcome, ${username}!`;
} else {
    welcome.innerHTML = "👋 Welcome, Explorer!";
}

function startJourney() {
    window.location.href = "game.html";
}