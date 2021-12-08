/**
 * Create variables for every elements needed.
 */

var gameArea = document.getElementById('game-box');
var gameIntro = document.getElementsByClassName('game-intro')[0];
var gameEnd = document.getElementsByClassName('game-end')[0];
var startButton = document.getElementsByClassName('start-game-button')[0];
var articleWiki = document.getElementsByClassName('wiki-article')[0];
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var submitButton = document.getElementsByClassName('submit-button');
var counter = document.getElementById('counter');
var acceptedAnswer = document.getElementById('accepted-answer');

let questions = [
    {
        article : "The area that became [...] was first inhabited by groups of hunter–gatherers 13,000 years ago.The predominant tribe at the moment of the arrival of Europeans was the Charrúa people, when the Portuguese first established Colónia do Sacramento in 1680; [...] was colonized by Europeans late relative to neighboring countries. [...] won its independence between 1811 and 1828, following a four-way struggle between Portugal and Spain, and later Argentina and Brazil.",
        choices : {
            choiceA : "Peru",
            choiceB : "Columbia",
            choiceC : "Uruguay",
            choiceD : "Bolivia",
        }
        
    },{
        article : "Present-day [...] traces its historic and cultural identity to Lan Xang, which existed from the 14th century to the 18th century as one of the largest kingdoms in Southeast Asia.Because of its central geographical location in Southeast Asia, the kingdom became a hub for overland trade and became wealthy economically and culturally.After a period of internal conflict, Lan Xang broke into three separate kingdoms—Luang Phrabang, Vientiane, and Champasak.",
        choices :{
            choiceA : "Thailand",
            choiceB : "Laos",
            choiceC : "Cambodia",
            choiceD : "Vietnam",
        }
    },{
        article : "[...] has several regions: a desert zone in the north, an arid Sahelian belt in the centre and a more fertile Sudanian Savanna zone in the south. Lake [...], after which the country is named, is the second-largest wetland in Africa. [...]'s official languages are Arabic and French. It is home to over 200 different ethnic and linguistic groups. Islam (51.8%) and Christianity (44.1%) are the main religions practiced in [...].",
        choices : {
            choiceA : "Mozambique",
            choiceB : "Ethiopia",
            choiceC : "Gambia",
            choiceD : "Chad",
        }
    },{
        article : "The area currently known as [...] has long served as a thoroughfare for many other nations and cultures.Merv is one of the oldest oasis-cities in Central Asia and was once the biggest city in the world.In medieval times, Merv was also one of the great cities of the Islamic world and an important stop on the Silk Road. Annexed by the Russian Empire in 1881, [...] later figured prominently in the anti-Bolshevik movement in Central Asia.",
        choices : {
            choiceA : "Turkey",
            choiceB : "Turqmenistan",
            choiceC : "Georgia",
            choiceD : "Kazakhstan",
        }
    },{
        article : "[...] was formed in 1859 through a personal union of the Danubian Principalities of Moldavia and Wallachia. The new state, officially named since 1866, gained independence from the Ottoman Empire in 1877.During World War I, after declaring its neutrality in 1914,[...] fought together with the Allied Powers from 1916. In the aftermath of the war, Bukovina, Bessarabia, Transylvania and parts of Banat, Crișana, and Maramureș became part of the Kingdom of [...].",
        choices : {
            choiceA : "Moldavia",
            choiceB : "Bulgaria",
            choiceC : "Romania",
            choiceD : "Hungary",
        }
        
    }

]

/**
 * Add functions to the game
 */



function startGame(event) {
    gameIntro.style.display = 'none';
    gameArea.style.display = 'flex';
    var question1 = questions[Math.floor(Math.random()*questions.length)];
    gameArea.innerText = question1
}

startButton.addEventListener("click", startGame);


