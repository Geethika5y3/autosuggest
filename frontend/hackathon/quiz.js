// -----------------------------
// PLAYER DATA
// -----------------------------
let xp = parseInt(localStorage.getItem("xp")) || 0;
let coins = parseInt(localStorage.getItem("coins")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;

let currentQuestion = 0;

// -----------------------------
// MISSION
// -----------------------------
let mission = localStorage.getItem("mission") || "mixed";

// -----------------------------
// QUESTIONS
// -----------------------------

const htmlQuestions = [
{
question:"HTML stands for?",
options:["Hyper Text Markup Language","Home Tool Markup Language","High Text Machine Language","None"],
answer:0,
explanation:"HTML is used to structure web pages."
},
{
question:"Which tag creates a hyperlink?",
options:["<a>","<img>","<p>","<div>"],
answer:0,
explanation:"<a> tag creates links."
},
{
question:"Which tag is used for images?",
options:["<img>","<image>","<pic>","<src>"],
answer:0,
explanation:"<img> displays images."
},
{
question:"Largest heading tag?",
options:["<h6>","<h1>","<heading>","<head>"],
answer:1,
explanation:"<h1> is the largest heading."
},
{
question:"Which tag creates a paragraph?",
options:["<p>","<para>","<text>","<h1>"],
answer:0,
explanation:"<p> creates paragraph."
},
{
question:"HTML file extension?",
options:[".html",".css",".js",".txt"],
answer:0,
explanation:"HTML files use .html"
},
{
question:"Line break tag?",
options:["<br>","<lb>","<break>","<line>"],
answer:0,
explanation:"<br> creates line break."
},
{
question:"HTML is used for?",
options:["Styling","Structure","Logic","Database"],
answer:1,
explanation:"HTML creates structure."
},
{
question:"Table row tag?",
options:["<tr>","<td>","<table>","<th>"],
answer:0,
explanation:"<tr> is table row."
}
];

// -----------------------------
// CSS QUESTIONS
// -----------------------------

const cssQuestions = [
{
question:"CSS full form?",
options:["Cascading Style Sheets","Creative Style System","Color Style Sheet","None"],
answer:0,
explanation:"CSS styles web pages."
},
{
question:"Used to change text color?",
options:["color","font","text","style"],
answer:0,
explanation:"color changes text color."
},
{
question:"CSS file extension?",
options:[".css",".html",".js",".style"],
answer:0,
explanation:"CSS files use .css"
},
{
question:"Background color property?",
options:["background-color","bgcolor","color","background"],
answer:0,
explanation:"background-color sets background."
},
{
question:"Make text bold?",
options:["font-weight","text-bold","font-style","bold"],
answer:0,
explanation:"font-weight:bold"
},
{
question:"Center text?",
options:["text-align","align","center","position"],
answer:0,
explanation:"text-align center"
}
];

// -----------------------------
// JS QUESTIONS
// -----------------------------

const jsQuestions = [
{
question:"JS runs in?",
options:["Browser","Printer","Monitor","Keyboard"],
answer:0,
explanation:"JS runs in browser."
},
{
question:"Variable keyword?",
options:["var","let","const","all"],
answer:3,
explanation:"All are valid."
},
{
question:"Function keyword?",
options:["function","def","func","method"],
answer:0,
explanation:"function is used."
},
{
question:"Console output?",
options:["console.log()","print()","echo()","write()"],
answer:0,
explanation:"console.log"
},
{
question:"JS file extension?",
options:[".js",".css",".html",".java"],
answer:0,
explanation:".js"
},
{
question:"If condition keyword?",
options:["if","for","loop","case"],
answer:0,
explanation:"if statement"
}
];

// -----------------------------
// MIXED
// -----------------------------
const mixedQuestions = [...htmlQuestions, ...cssQuestions, ...jsQuestions];

// -----------------------------
// SELECT QUESTIONS
// -----------------------------
let questions = [];

if (mission === "html") questions = htmlQuestions;
else if (mission === "css") questions = cssQuestions;
else if (mission === "js") questions = jsQuestions;
else questions = [...mixedQuestions];

// shuffle
questions.sort(() => Math.random() - 0.5);

// -----------------------------
// INIT
// -----------------------------
loadQuestion();

// -----------------------------
// LOAD QUESTION
// -----------------------------
function loadQuestion() {
    document.getElementById("xp").innerText = xp;
    document.getElementById("coins").innerText = coins;
    document.getElementById("level").innerText = level;

    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear existing options

    // Create elements safely using textContent to prevent HTML tag rendering issues
    for (let i = 0; i < q.options.length; i++) {
        let div = document.createElement("div");
        div.className = "option";
        div.textContent = q.options[i]; // <--- This safely handles <h1>, <a>, etc.
        div.onclick = function() { checkAnswer(i, this); };
        optionsContainer.appendChild(div);
    }

    document.getElementById("progressBar").value = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("aiResponse").innerText = "";
}

// -----------------------------
// CHECK ANSWER
// -----------------------------
function checkAnswer(i, el) {

let q = questions[currentQuestion];
let options = document.querySelectorAll(".option");

options.forEach(o => o.style.pointerEvents = "none");

if (i === q.answer) {
el.classList.add("correct");
xp += 20;
coins += 10;
if (xp >= level * 100) level++;
showToast("Correct +20 XP", "#28a745");
} else {
el.classList.add("wrong");
options[q.answer].classList.add("correct");
showToast("Wrong Answer", "#dc3545");
}

save();
}

// -----------------------------
// NEXT QUESTION
// -----------------------------
function nextQuestion() {
currentQuestion++;

if (currentQuestion >= questions.length) {
showToast("Mission Completed 🎉", "#28a745");
setTimeout(() => {
window.location.href = "shop.html";
}, 1500);
return;
}

loadQuestion();
}

// -----------------------------
// SAVE
// -----------------------------
function save() {
localStorage.setItem("xp", xp);
localStorage.setItem("coins", coins);
localStorage.setItem("level", level);
}

// -----------------------------
// TOAST
// -----------------------------
function showToast(msg, color) {
let t = document.getElementById("toast");
t.innerText = msg;
t.style.background = color;
t.classList.add("show");

setTimeout(() => {
t.classList.remove("show");
}, 2000);
}

// -----------------------------
// AI EXPLANATION
// -----------------------------
function explainAnswer() {
let q = questions[currentQuestion];
document.getElementById("aiResponse").innerText =
"🤖 " + (q.explanation || "No explanation available");
}