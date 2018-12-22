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
    