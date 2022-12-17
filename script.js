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
    if (a<8) {
      alert ("Please choose a password lenght higher than 8")
    }
    else if (a>128) {
      alert ("Please choose a password lenght lower than 128")
    }
    else {
      criteria ()
    }
}
function criteria () {
    const b = confirm ("Would you like to include lowercase in your password?");
    const c = confirm ("Would you like to include upercase in your password?");
    const d = confirm ("Would you like to include numbers in your password?");
    const e = confirm ("Would you like to include special characters in your password?");
  
  }

 

