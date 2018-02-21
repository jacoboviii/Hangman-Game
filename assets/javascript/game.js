window.onload = function() {

    // List of countries that computer will choose from
    
    var countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


    // List of variables to keep track of wins, letters guessed correctly, remining guesses, etc.
    
    var selectedCountry = "";
    var countryLetterArray = [];
    var numberWins = 0;
    var lettersGuessed = [];
    var remainingGuesses = 8;
    var answerArray = [];

    // Function that sets the initial values for the page content
    function initialSetting() {

        // Computer makes a random pick from list of countries
        selectedCountry = countryList[Math.floor(Math.random() * countryList.length)];
        console.log(selectedCountry);
        // Change characters in the selected country to lower case and split it into an array
        countryLetterArray = selectedCountry.toLocaleLowerCase().split('');

        // Fill the countryLetterArray with undercores and set it to the maskedArray
        var maskedArray = [];

        for (var i = 0; i < countryLetterArray.length; i++) {
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
        if (countryLetterArray.indexOf(userGuess) > -1){
            //If it is update the answerArray
            for (var i = 0; i < countryLetterArray.length; i++) {
                if (userGuess === countryLetterArray[i]){
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

