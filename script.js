// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var allCharacters = [];
var lenght = [];
var finalPassword = [];



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
      criteria ()
    }
}


function criteria () {
    const lowercase = confirm ("Click 'OK' if you would like to include lowercase in your password");
    if (lowercase) {
      allCharacters.push ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      console.log(allCharacters);
    }
    const upercase = confirm ("Click 'OK' if you would to include upercase in your password");
    if (upercase) {
      allCharacters.push ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      console.log(allCharacters);
    }
    const numbers = confirm ("Click 'OK' if you would to include numbers in your password");
    if (numbers) {
      allCharacters.push (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
      console.log (allCharacters);
    }
    const specialChar = confirm ("Click 'OK' if you would to include special characters in your password");
    if (specialChar) {
      allCharacters.push ('!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~');
      console.log(allCharacters);
    }

      shuffle(allCharacters);
      console.log(allCharacters);
      finalPassword = allCharacters.slice(0,lenght);
      finalPassword = finalPassword.join("")
      console.log(finalPassword);
      document.getElementById("password").innerHTML = finalPassword;
 
    allCharacters = [];
    console.log(allCharacters);
  }

  function shuffle(allCharacters) {
    allCharacters.sort(() => Math.random() - 0.5);
  }
 

  

 

