//Letter constructor, 'displayLet" will display either an underscore or letter or blank ( the word guessed has a space)
//'check' function changes boolean so the letter will display if it's guessed
function Letter(alpha) {
    this.alpha = alpha;
    this.guessed = false;
    this.displayLet = function() {
        if (this.alpha === " ") {
            return " ";
        }
        else if(!this.guessed) {
            return "_";
        }
        else {
            return this.alpha;
        }
    }
    this.check = function(userGuess) {
        if (userGuess === this.alpha) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;