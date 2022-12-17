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

function generatePassword() {
    const a = prompt ("Choose a password lenght from 8 to 128 characters");
    const b = confirm ("Would you like to include lowercase in your password?");
    const c = confirm ("Would you like to include upercase in your password?");
    const d = confirm ("Would you like to include numbers in your password?");
    const e = confirm ("Would you like to include special characters in your passaword?");
  
  }



