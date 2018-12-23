//NPM modules to obtain player/'s input (letter guesses) and also add color to the display
var Word = require("./word.js");
var inquirer = require('inquirer');
var colors = require('colors');

wordList = ["BAT MAN", "AQUA MAN", "HIT GIRL", "SPIDER GIRL", "SPIDER WOMAN", "THOR", "HE-MAN", "PLASTIC MAN", "STATIC SHOCK", "ELONGATED MAN", "SPIDER GWEN", "BLACK SCORPIAN", "DARE DEVIL", "JESSICA JONES"];
var select = 0;
var chosenWord = "";
var gameWord = "";
var counter = 0;

//Chooses a word from the word array, uses the word constructor to create the proper display and functionality;
//'chosenWord' is used for comparison later to check if the word is solved
function startGame() {
    if (wordList.length<2) {
        wordList = ["BAT MAN", "AQUA MAN", "HIT GIRL", "SPIDER GIRL", "SPIDER WOMAN", "THOR", "HE-MAN", "PLASTIC MAN", "STATIC SHOCK", "ELONGATED MAN", "SPIDER GWEN", "BLACK SCORPIAN", "DARE DEVIL", "JESSICA JONES"];
    }
     select = Math.floor(Math.random()*wordList.length);
    chosenWord = wordList[select];
    gameWord = new Word(chosenWord);
    gameWord.makeWord();
    if (select > -1) {
        wordList.splice(select, 1);
    }
    console.log("\nYou get 8 letter guesses to find the Mario character.\n".cyan)
    promptUser();
}


//Prompt function that lets user to input a letter guess, restarts the game if player is out of wrong guesses.
function promptUser() {
    if (counter<8) {
        console.log(gameWord.showWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "\nPick a letter and press enter. ".cyan
            }
        ]).then(function(data) {
                checkAnswer(data);
        });
    }
    else{
        console.log("\nSorry, you're out of guesses.\n".inverse);
        console.log(chosenWord.rainbow);
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
}

function checkAnswer(data) {}

function rightGuess() {}



