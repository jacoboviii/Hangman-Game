window.onload = function() {

    // List of countries that computer will choose from
    var listCountries = ["Mexico", "USA", "Brazil", "Canada", "Argentina", "Chile", "Colombia", "Spain"];

    // List of variables to keep track of wins, letters guessed correctly, remining guesses, etc.
    
    var selectedCountry = "";
    var countryArray = [];
    var numberWins = 0;
    var lettersGuessed = [];
    var remainingGuesses = 8;
    var answerArray = [];

    // Function that sets the initial values for the page content
    function initialSetting() {

        // Computer makes a random pick from list of countries
        selectedCountry = listCountries[Math.floor(Math.random() * listCountries.length)];
        console.log(selectedCountry);
        // Change characters in the selected country to lower case and split it into an array
        countryArray = selectedCountry.toLocaleLowerCase().split('');

        // Fill the countryArray with undercores and set it to the maskedArray variable
        var maskedArray = [];

        for (var i = 0; i < countryArray.length; i++) {
            maskedArray[i] = "_";
        }

        // reseting values
        lettersGuessed = [];
        remainingGuesses = 8;
        //Set answerArray equal to maskedArray
        answerArray = maskedArray;
        console.log(answerArray);
        //document.querySelector("#result-message").innerHTML = "";
        document.querySelector("#current-word").innerHTML = maskedArray.join(' ');
        document.querySelector("#wins").innerHTML = numberWins;
        document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
    }

    // Key press function
    document.onkeyup = function(event) {

        //Capture user guess 
        var userGuess = event.key.toLocaleLowerCase();

        //First check if the user guess is correct
        if (countryArray.indexOf(userGuess) > -1){
            //If it is update the answerArray
            for (var i = 0; i < countryArray.length; i++) {
                if (userGuess === countryArray[i]){
                    answerArray[i] = userGuess;
                }
            }
             //If the userGuess is in the letterGuessed then print that it's already been guessed.
             if (lettersGuessed.indexOf(userGuess) > -1){
                document.querySelector("#result-message").innerHTML = "Letter has already been guessed!";
            //If not, add this new guess to the array
            } else {
                lettersGuessed.push(userGuess);
                document.querySelector("#result-message").innerHTML = "";
            } 

        //If the user guess is incorrect, decrease the number of guesses by one
        //but only if the userGuess hasn't been played
        } else {
            //If the userGuess is in the letterGuessed then print that it's already been guessed.
            if (lettersGuessed.indexOf(userGuess) > -1){
                document.querySelector("#result-message").innerHTML = "Letter has already been guessed!";
            //If not, add this new guess to the array
            } else {
                lettersGuessed.push(userGuess);
                document.querySelector("#result-message").innerHTML = "";
                remainingGuesses--;
            } 
        };
        
        //Next, check whether it's win or a loss
        //The loss condition
        if (remainingGuesses === 0) {
            document.querySelector("#result-message").innerHTML = "You lost! The country was " + selectedCountry + ".";
            initialSetting();
        }
        //For the win condition, if no undescores are found in the answerArray then it's a win
        if (answerArray.indexOf("_") === -1){
            console.log(answerArray.indexOf("_") === -1);
            document.querySelector("#result-message").innerHTML = "You won!";
            //Increase the number of wins
            numberWins++;
            initialSetting();
        };
        
        //Update content
        document.querySelector("#wins").innerHTML = numberWins;
        document.querySelector("#current-word").innerHTML = answerArray.join(' ');
        document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
        document.querySelector("#letters-guessed").innerHTML = lettersGuessed.join(' ').toLocaleUpperCase();   
    };

    initialSetting();
};

