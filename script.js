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
      alert ("Please choose a password lenght higher than 8");
      generatePassword();
    }
    else if (a>128) {
      alert ("Please choose a password lenght lower than 128");
      generatePassword();
    }
    else {
      criteria ()
    }
}
function criteria () {
    const b = confirm ("Would you like to include lowercase in your password?");
    if (b) {
      const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      console.log(lowercase);
    }
    const c = confirm ("Would you like to include upercase in your password?");
    if (c) {
      const upercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      console.log(upercase);
    }
    const d = confirm ("Would you like to include numbers in your password?");
    if (d) {
      const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(number);
    }
    const e = confirm ("Would you like to include special characters in your password?");
    if (e) {
      const symbol = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
      console.log (symbol);
    }
   


  
  }


 
  

 

