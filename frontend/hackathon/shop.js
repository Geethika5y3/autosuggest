// ----------------------------
// LOAD PLAYER DATA
// ----------------------------

let coins = parseInt(localStorage.getItem("coins")) || 0;
let xp = parseInt(localStorage.getItem("xp")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;

// Purchased items
let planetItems = JSON.parse(localStorage.getItem("planetItems")) || [];

// ----------------------------
// SHOW PLAYER DATA
// ----------------------------

document.getElementById("coins").innerHTML = coins;
document.getElementById("xp").innerHTML = xp;
document.getElementById("level").innerHTML = level;

displayItems();

// ----------------------------
// BUY ITEM
// ----------------------------

function buyItem(item, price){

    if(coins < price){

        alert("❌ You don't have enough coins!");

        return;

    }

    coins = coins - price;

    planetItems.push(item);

    localStorage.setItem("coins", coins);
    localStorage.setItem("planetItems", JSON.stringify(planetItems));

    document.getElementById("coins").innerHTML = coins;

    displayItems();

    alert("✅ " + item + " added to your planet!");

}

// ----------------------------
// DISPLAY ITEMS
// ----------------------------

function displayItems(){

    let output = "";

    for(let i=0;i<planetItems.length;i++){

        output +=
        "<span style='font-size:45px;margin:10px;display:inline-block;'>"
        + planetItems[i] +
        "</span>";

    }

    if(output==""){

        output = "<h3>No items purchased yet.</h3>";

    }

    document.getElementById("planetItems").innerHTML = output;

}

// ----------------------------
// RESET PLANET
// ----------------------------

function clearPlanet(){

    let choice = confirm("Reset your planet?");

    if(choice){

        planetItems = [];

        localStorage.removeItem("planetItems");

        displayItems();

    }

}

// ----------------------------
// GO TO DASHBOARD
// ----------------------------

function goDashboard(){

window.location.href="dashboard.html";

}