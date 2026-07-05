let avatar = "";

function selectAvatar(element){

    let all = document.querySelectorAll(".avatar");

    all.forEach(function(item){
        item.classList.remove("selected");
    });

    element.classList.add("selected");

    avatar = element.innerHTML;

}

function startGame(){

    let username = document.getElementById("username").value.trim();

    if(username==""){
        alert("Please enter your name.");
        return;
    }

    if(avatar==""){
        alert("Please choose an avatar.");
        return;
    }

    localStorage.setItem("username",username);
    localStorage.setItem("avatar",avatar);

    window.location.href="ind.html";

}