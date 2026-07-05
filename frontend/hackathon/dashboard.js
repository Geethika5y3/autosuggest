// -----------------------------
// USER DATA
// -----------------------------

let username = localStorage.getItem("username") || "Explorer";
let avatar = localStorage.getItem("avatar") || "👨‍🚀";

let xp = parseInt(localStorage.getItem("xp")) || 0;
let coins = parseInt(localStorage.getItem("coins")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;

// -----------------------------
// DISPLAY USER INFO
// -----------------------------

document.getElementById("welcome").innerHTML =
`${avatar} Welcome Back, ${username}!`;

document.getElementById("xp").innerHTML = xp;
document.getElementById("coins").innerHTML = coins;
document.getElementById("level").innerHTML = level;

// -----------------------------
// PROGRESS BAR
// -----------------------------

let progress = document.getElementById("progress");

let nextLevelXP = level * 100;

progress.max = nextLevelXP;
progress.value = xp;

document.getElementById("progressText").innerHTML =
`${xp} / ${nextLevelXP} XP`;

// -----------------------------
// PLANET EVOLUTION
// -----------------------------

let planet = document.getElementById("planet");

if(level==1){

    planet.innerHTML="🌑";

}
else if(level==2){

    planet.innerHTML="🌍";

}
else if(level==3){

    planet.innerHTML="🌎";

}
else if(level==4){

    planet.innerHTML="🌏";

}
else if(level>=5){

    planet.innerHTML="🪐";

}

// -----------------------------
// BADGES
// -----------------------------

let badge = "Beginner Explorer";

if(level>=2){

    badge = "Coding Warrior";

}

if(level>=4){

    badge = "Planet Builder";

}

if(level>=6){

    badge = "Galaxy Master";

}

document.getElementById("badgeName").innerHTML = badge;

// -----------------------------
// BUTTONS
// -----------------------------

function continueGame(){

    window.location.href = "game.html";

}

function shop(){

    window.location.href = "shop.html";

}

function logout(){

    if(confirm("Logout from SkillQuest AI?")){

        localStorage.clear();

        window.location.href = "login.html";

    }

}