window.onload = function() {

    // List of countries that computer will choose from
    var listCountries = ["Mexico", "USA", "Brazil", "Canada", "Argentina", "Chile", "Colombia", "Spain"];

    // List of variables to keep track of wins, letters guessed correctly, remining guesses, etc.
    
    var selectedCountry = "";
    var splitCountry = [];
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
        splitCountry = selectedCountry.toLocaleLowerCase().split('');

        // Format selected country to display characters as underscores
        var maskedArray = [];

        for (var i = 0; i < splitCountry.length; i++) {
            maskedArray[i] = "_";
        }

        // reseting values
        lettersGuessed = [];
        remainingGuesses = 8;
        answerArray = maskedArray;
        console.log(answerArray);
        //document.querySelector("#result-message").innerHTML = "";
        document.querySelector("#current-word").innerHTML = maskedArray.join(' ');
        document.querySelector("#wins").innerHTML = numberWins;
        document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
    }

    // Key press function
    document.onkeyup = function(event) {

        // User guess 
        var userGuees = event.key.toLocaleLowerCase();
        

        //First check that remaining guesses is not zero
        if (remainingGuesses === 0) {
            document.querySelector("#result-message").innerHTML = "You lost!";
            initialSetting();
        
        //Check if the letter has already been guessed
        } else if (lettersGuessed.indexOf(userGuees) > -1){
            document.querySelector("#result-message").innerHTML = "Letter has already been guessed!";

        //Check the win condition, if no undescores are found in the answerArray then it's a win
        } else if (answerArray.indexOf("_") === -1){
            console.log(answerArray.indexOf("_") === -1);
            document.querySelector("#result-message").innerHTML = "You won!";
            numberWins++;
            initialSetting();

        //Check whether the user guess is in the splitCountry array
        } else if (splitCountry.indexOf(userGuees) > -1){
            
            //and update the answerArray
            for (var i = 0; i < splitCountry.length; i++) {
                if (userGuees === splitCountry[i]){
                    answerArray[i] = userGuees;
                }  
            }

        } else {
            remainingGuesses--;
        };

        //Update content
        lettersGuessed.push(userGuees);
        document.querySelector("#wins").innerHTML = numberWins;
        document.querySelector("#current-word").innerHTML = answerArray.join(' ');
        document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
        document.querySelector("#letters-guessed").innerHTML = lettersGuessed.join(' ').toLocaleUpperCase();   
    };

    initialSetting();
};

