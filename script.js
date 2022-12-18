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

var testing = [];
var a = [];

function generatePassword() {
    a = prompt ("Choose a password lenght from 8 to 128 characters");
    console.log(a);
    if (a === null) {
      return;
    }
    else if (a<8) {
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
    const b = confirm ("Click 'OK' if you would like to include lowercase in your password");
    if (b) {
      testing.push ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      console.log(testing);
    }
    const c = confirm ("Click 'OK' if you would to include upercase in your password");
    if (c) {
      testing.push ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      console.log(testing);
    }
    const d = confirm ("Click 'OK' if you would to include numbers in your password");
    if (d) {
      testing.push (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
      console.log (testing);
    }
    const e = confirm ("Click 'OK' if you would to include special characters in your password");
    if (e) {
      testing.push ('!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~');
      console.log(testing);
    }
    shuffle(testing);
    console.log(testing);
    testing = [];
    console.log(testing);
  }

  function shuffle(testing) {
    testing.sort(() => Math.random() - 0.5);
  }
 
  

 

