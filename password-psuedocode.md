[array of special characters]
[array of numerical characters]
[array of uppercase characters]
[array of lowercase characters]

function askUserForPasswordPreferences() {

    var = user's password length choice
        check if user entered a number
        check if user entered a number greater than 8
        check if user entered a number less than 129

    var = user's special character confirmation
    var = user's numerical character confirmation
    var = user's uppercase character confirmation
    var = user's lowercase character confirmation

## NEED HELP ##
    check if user has chose at least one character group

## MAKE AN OBJECT ## 
    var = user's password options 
  

    return passwordOptions
}

## NEED HELP WITH SCOPE ## CAN'T FIND MY INFORMATION FROM THE FIRST FUNCTION - HOW DO I PULL USERSELECTION OUT?

## NEED HELP ##
function generateRandomNumber(array) {
    var i = Math random logic to generate a random # we can use as an index
    var = array[i]

    return randomlySelectedValue
}

function generatePassword() {
    var preference = askUserForPasswordPreferences() 

    var = array of all potential characters
    var = array of all guaranteed characters
    var = array to hold password character selection result

    check if user has selected at least one password option

    check if user has selected special characters
        if yes, concat the special array into the possible characters array
        if yes, randomly select a character from the special array and push them into our guaranteed characters array  

    check if user has selected numeric characters
        if yes, concat the numeric array into the possible characters array
        if yes, randomly select a character from the numeric array and push them into our guaranteed characters array

    check if user has selected uppercase characters
        if yes, concat the uppercase array into the possible characters array
        if yes, randomly select a character from the uppercase array and push them into our guaranteed characters array

    check if user has selected lowercase characters
        if yes, concat the lowercase array into the possible characters array
        if yes, randomly select a character from the lowercase array and push them into our guaranteed characters array

    loop over the password length from the options object, and for every loop, select a random index from the possible characters array and concat that character into the result array

    loop over the guaranteed characters array, and for every loop, replace an index in the result array with an index from the guaranteed characters array

    return the joined result array
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
