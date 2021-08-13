var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function askUserForPreference() {
  var userPreference = []
    if(userPreference === "")

    if(userPreference > 7)

    if(userPreference < 129)
  
  var userSpecialCharacterConfirmation = confirm("Do you want to have a special character in your password");
    if (userSpecialCharacterConfirmation == true){
      userSpecialCharacter.log = "true";
    }
    else { userSpecialCharacter.log = "false";

    }



    var userSpecialCharacter = []
    var userNumericalCharacter = []
    var userUppercaseCharacter = []
    var userLowecaseCharacter = []
  return passwordOptions;



}









// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
