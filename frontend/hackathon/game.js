function startMission(type){

    // Save selected mission

    localStorage.setItem("mission", type);

    // Open Quiz Page

    window.location.href = "quiz.html";

}