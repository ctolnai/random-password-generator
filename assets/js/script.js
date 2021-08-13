var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function askUserForPasswordPreferences() {
  var passwordLength = window.prompt("Chose a number between 8 and 128");
  while (passwordLength <= 7 || passwordLength >= 129) {
    passwordLength = window.prompt("Chose a number between 8 and 128");

  }
  console.log(passwordLength);

  var userSpecialCharacterConfirmation = confirm("Do you want to have a special character in your password?");
  if (userSpecialCharacterConfirmation == true) {
  }
  console.log(userSpecialCharacterConfirmation);


  var userNumericalCharacterConfirmation = confirm("Do you want to have a numerical character in your password?");
  if (userNumericalCharacterConfirmation == true) {
  }
  console.log(userNumericalCharacterConfirmation);


  var userUppercaseCharacterConfirmation = confirm("Do you want to have an uppercase character in your password?");
  if (userUppercaseCharacterConfirmation == true) {
  }
  console.log(userUppercaseCharacterConfirmation);


  var userLowercaseCharacterConfirmation = confirm("Do you want to have a lowercase character in your password?");
  if (userLowercaseCharacterConfirmation == true) {
  }
  console.log(userLowercaseCharacterConfirmation);

  var userSelection = {
    length: passwordLength,
    userSpecialCharacters: userSpecialCharacterConfirmation,
    userNumericalCharacters: userNumericalCharacterConfirmation,
    userUppercaseCharacters: userUppercaseCharacterConfirmation,
    userLowercaseCharacters: userLowercaseCharacterConfirmation,
  }
  if (userSelection.userSpecialCharacters === false && userSelection.userNumericalCharacters === false && userSelection.userUppercaseCharacters === false && userSelection.userLowercaseCharacters === false) {
    window.alert ("You must chose at least one character in your password")
      generatePassword()
    

    }

  return userSelection;
  }



function generatePassword() {
  var userSelection = askUserForPasswordPreferences()

  if(userSelection.userSpecialCharacters=== true)
  finalArray=finalArray.concat(specialCharacters)

  console.log(userSelection)

  // array of all potential characters:
  // see notes starting on line 45 from psuedocode
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






// random elements
// // var characters = ["a", "b", "c",  ]
// // var randomElements = characters[Math.floor(Math.random()*characters.length)]

// for (var i = 0; i<numofcharacters; i++){
//   finalString = finalString + characters[Math.floor(Math.random()*characters.length)]
// }

// for the final password - this goes in the for loop (up to total number chosen by the user)
// finalString = finalString + characters[Math.floor(Math.random()*characters.length)]