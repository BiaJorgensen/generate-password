// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Global variables
var allCharacters = [];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  passwordText.value = password;

  
}



function generatePassword() {
  allCharacters = [];
  var length = passwordLength ();
  while (length != null && length != "") {
    var possibleCharacters = criteria ();
    var finalPassword = [];
    for (i = 0; i < length; i++) {
    
      finalPassword.push (possibleCharacters [Math.floor(Math.random() * possibleCharacters.length)])

    }
    finalPassword = finalPassword.join("")
    console.log(finalPassword);
        
    return finalPassword; 
}
return allCharacters;
}


function passwordLength() {
  var length = prompt ("Choose a password length from 8 to 128 characters");
    console.log(length);
    if (length === null || length === "") {
      
      return allCharacters;
    }
    else if (length<8) {
      alert ("Please choose a password length higher than 8");
      generatePassword();
    }
    else if (length>128) {
      alert ("Please choose a password length lower than 128");
      generatePassword();
    }
    else {
      return length;
    }
}


function criteria () {
    var lowercase = confirm ("Click 'OK' if you would like to include lowercase in your password");
    if (lowercase) {
      allCharacters.push ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      console.log(allCharacters);
    }
    var upercase = confirm ("Click 'OK' if you would to include upercase in your password");
    if (upercase) {
      allCharacters.push ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      console.log(allCharacters);
    }
    var numbers = confirm ("Click 'OK' if you would to include numbers in your password");
    if (numbers) {
      allCharacters.push (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
      console.log (allCharacters);
    }
    var specialChar = confirm ("Click 'OK' if you would to include special characters in your password");
    if (specialChar) {
      allCharacters.push ('!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '\\', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~');
      console.log(allCharacters);
    }
    if (lowercase != true && upercase != true && numbers != true && specialChar != true) {
      alert ("Please select at least one criteria to generate a password. Please click 'Generate Password' again.")
    }
    return allCharacters;
      
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

