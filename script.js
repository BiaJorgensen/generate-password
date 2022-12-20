// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var allCharacters = [];
var lenght = [];
var finalPassword = [];
var lowercase = [];
var upercase = [];
var numbers = [];
var specialChar = [];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText = {
    value: finalPassword,
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  allCharacters = [];
  var lenght = passwordLenght ();
  var possibleCharacters = criteria ();
  var finalPassword = [];
  for (var i = 0; i < lenght; i++) {
    finalPassword.push (possibleCharacters [Math.floor(Math.random() * possibleCharacters.lenght)])

  }
  finalPassword = finalPassword.join("")
  console.log(finalPassword);
       
  return finalPassword; 
}

function passwordLenght() {
  lenght = prompt ("Choose a password lenght from 8 to 128 characters");
    console.log(lenght);
    if (lenght === null) {
      return;
    }
    else if (lenght<8) {
      alert ("Please choose a password lenght higher than 8");
      generatePassword();
    }
    else if (lenght>128) {
      alert ("Please choose a password lenght lower than 128");
      generatePassword();
    }
    else {
      return lenght;
    }
}


function criteria () {
    lowercase = confirm ("Click 'OK' if you would like to include lowercase in your password");
    if (lowercase) {
      allCharacters.push ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      console.log(allCharacters);
    }
    upercase = confirm ("Click 'OK' if you would to include upercase in your password");
    if (upercase) {
      allCharacters.push ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      console.log(allCharacters);
    }
    numbers = confirm ("Click 'OK' if you would to include numbers in your password");
    if (numbers) {
      allCharacters.push (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
      console.log (allCharacters);
    }
    specialChar = confirm ("Click 'OK' if you would to include special characters in your password");
    if (specialChar) {
      allCharacters.push ('!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '\\', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~');
      console.log(allCharacters);
    }
    return allCharacters;

 
    // if (allCharacters = []) {
    //   alert ("You need to choose at least one criteria to generate a password. Please select 'Generate Password' again.");
    //   return;
    // }

      
  }



  

 

