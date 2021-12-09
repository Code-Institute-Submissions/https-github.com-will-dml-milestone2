/**
 * Create variables for every elements needed.
 */

var gameArea = document.getElementById('game-box');
var gameIntro = document.getElementsByClassName('game-intro')[0];
var gameEnd = document.getElementsByClassName('game-end')[0];
var startButton = document.getElementsByClassName('start-game-button')[0];
var articleWiki = document.getElementById('wiki-article');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var answers = document.getElementsByClassName('answers');
let totalAnswer = document.getElementById('total-answer');
let correctAnswer = document.getElementById('accepted-answer');

let questions = [
    {
        article : '<p>"The area that became [...] was first inhabited by groups of hunter–gatherers 13,000 years ago.</p> The predominant tribe at the moment of the arrival of Europeans was the Charrúa people, when the Portuguese first established Colónia do Sacramento in 1680; [...] was colonized by Europeans late relative to neighboring countries. [...] won its independence between 1811 and 1828, following a four-way struggle between Portugal and Spain, and later Argentina and Brazil."',
        choiceA : "Peru",
        choiceB : "Columbia",
        choiceC : "Uruguay",
        choiceD : "Bolivia",
        imgSrc : "url('../assets/img/river-g6ccf30427_1280.jpg')",
        correct : "C"
        
        
    },{
        article : '<p>"Present-day [...] traces its historic and cultural identity to Lan Xang, which existed from the 14th century to the 18th century as one of the largest kingdoms in Southeast Asia.</p> Because of its central geographical location in Southeast Asia, the kingdom became a hub for overland trade and became wealthy economically and culturally.After a period of internal conflict, Lan Xang broke into three separate kingdoms—Luang Phrabang, Vientiane, and Champasak."',
        choiceA : "Thailand",
        choiceB : "Laos",
        choiceC : "Cambodia",
        choiceD : "Vietnam",
        imgSrc : "url('../assets/img/blind-stretch-comb-g8d1015378_1280.jpg')",
        correct : "B"
    },{
        article : '"[...] has several regions: a desert zone in the north, an arid Sahelian belt in the centre and a more fertile Sudanian Savanna zone in the south. Lake [...], after which the country is named, is the second-largest wetland in Africa. [...]s official languages are Arabic and French. It is home to over 200 different ethnic and linguistic groups. Islam (51.8%) and Christianity (44.1%) are the main religions practiced in [...]."',
        choiceA : "Mozambique",
        choiceB : "Ethiopia",
        choiceC : "Gambia",
        choiceD : "Chad",
        imgSrc : "url('../assets/img/caravan-gd48ee82a3_1280.jpg')",
        correct : "D"
        
    },{
        article : '"The area currently known as [...] has long served as a thoroughfare for many other nations and cultures.Merv is one of the oldest oasis-cities in Central Asia and was once the biggest city in the world.In medieval times, Merv was also one of the great cities of the Islamic world and an important stop on the Silk Road. Annexed by the Russian Empire in 1881, [...] later figured prominently in the anti-Bolshevik movement in Central Asia."',
        choiceA : "Turkey",
        choiceB : "Turqmenistan",
        choiceC : "Georgia",
        choiceD : "Kazakhstan",
        imgSrc : "url('../assets/img/horse-urgench-g9753c1ee3_1280.jpg')",
        correct : "B"
        
    },{
        article : '"[...] was formed in 1859 through a personal union of the Danubian Principalities of Moldavia and Wallachia. The new state, officially named since 1866, gained independence from the Ottoman Empire in 1877.<p>During World War I, after declaring its neutrality in 1914,[...] fought together with the Allied Powers from 1916. In the aftermath of the war, Bukovina, Bessarabia, Transylvania and parts of Banat, Crișana, and Maramureș became part of the Kingdom of [...]."</p>',
        choiceA : "Moldavia",
        choiceB : "Bulgaria",
        choiceC : "Romania",
        choiceD : "Hungary",
        imgSrc : "url('../assets/img/fog-gca4a45b58_1280.jpg')",
        correct : "C"
        }
        
    

]

/**
 * Add functions to the game
 */

 // game start

function startGame(event) {
    gameIntro.style.display = 'none';
    gameArea.style.display = 'flex';
    if (gameArea.style.display === 'flex'){
        renderQuestion();
    }
    
}
startButton.addEventListener("click", startGame,);


// render a question

const numberOfQuestions = questions.length ;
let currentQuestionIndex = 0;



function renderQuestion(){

    let q = questions[currentQuestionIndex];

    articleWiki.innerHTML = q.article ;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    document.body.style.backgroundImage = q.imgSrc;

}

//select choice


// Check answer


function checkAnswer(answer){
    if(questions[currentQuestionIndex].correct == answer){
        incrementCorrectAnswer();
    }
    currentQuestionIndex++;
    totalNumberAnswers();

    if(currentQuestionIndex < numberOfQuestions){
        renderQuestion();
    }else{
        endGame();
    }
}
/**
 * Increment correct and total answer
 */

function incrementCorrectAnswer() {
    let oldScore = parseInt(document.getElementById("accepted-answer").innerText);
    document.getElementById("accepted-answer").innerText = ++oldScore;
}

function totalNumberAnswers() {
    let oldNumberAnswers = parseInt(document.getElementById("total-answer").innerText);
    document.getElementById("total-answer").innerText = ++oldNumberAnswers;
}

//Game progress

function gameProgress(){
    for(let q = 0; q <= numberOfQuestions; q++){
        totalAnswer++;
    }
}

// Game Ending 

let score = correctAnswer+totalAnswer;
let counter = document.getElementById('counter');

function endGame(){
    gameArea.style.display = 'none';
    gameEnd.style.display = 'flex';
    document.getElementById("game-end-txt").innerText = `Well done for getting this far! :D You have a result of ${counter.innerText} Feel free to try again if you want to improve your score and learn while having fun!`

}
let playAgainButton = document.getElementsByClassName('play-again')[0];
playAgainButton.addEventListener('click', playAgain);


function playAgain(){
    gameEnd.style.display = 'none';
    window.location.reload();
}
