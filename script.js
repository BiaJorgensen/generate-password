// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Global variable
var allCharacters = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password; 
}

//Generates password by using length from passwordLength function and possible characters from criteria function
function generatePassword() {
  //Guaranties that everytime function is called, variable housing possible characters is blank
  allCharacters = [];
  console.log(allCharacters);

  var length = passwordLength ();
  console.log(length);
  //Only generates password if user provides length and/or does not cancel length prompt
  if (length != null && length != "") {
    console.log(1);
    var possibleCharacters = criteria ();
    var finalPassword = [];
    //Adds random characters to finalPassword using possible characters, one by one up to the length requested by user
    for (i = 0; i < length; i++) {
      finalPassword.push (possibleCharacters [Math.floor(Math.random() * possibleCharacters.length)])
    }
    //Changes array formed for finalPassword to a string, also removes comma between each character
    finalPassword = finalPassword.join("")
    console.log(finalPassword);
     //Returns finalPassword to generatePassword()   
    return finalPassword; 
  }
  //Does not generate password if user does not provide length and/or cancels lentgh prompt by returning an empty array to generatePassword()
  else {
    console.log(2);
    return allCharacters;
  }
}

//Captures length of password
function passwordLength() {
  var length = prompt ("Choose a password length from 8 to 128 characters");
    console.log(length);
    //Returns an empty array to passwordLength() if the prompt is canceled or is empty
    if (length === null || length === "") {
      return allCharacters;
    }
    //Alerts user that lenght provided is lower than minimal length
    else if (length<8) {
      alert ("Please choose a password length higher or equal to 8. Please click 'Generate Password' again.");
      return length = null;
    }
    //Alerts user that lenght provided is higher than maximum length
    else if (length>128) {
      alert ("Please choose a password length lower or equal to 128. Please click 'Generate Password' again.");
      return length = null;
    }
    //Length follows minimal and maximum requeriments - Returns length value to passwordLength()
    else {
      return length;
    }
}

//Identifies character types user wished to include in password
function criteria () {
    var lowercase = confirm ("Click 'OK' if you would like to include lowercase in your password");
    //Adds lowercase characters to possible characters for password if user selects 'OK' in prompt
    if (lowercase) {
      allCharacters.push ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      console.log(allCharacters);
    }
    var upercase = confirm ("Click 'OK' if you would to include upercase in your password");
    //Adds upercase characters to possible characters for password if user selects 'OK' in prompt
    if (upercase) {
      allCharacters.push ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      console.log(allCharacters);
    }
    var numbers = confirm ("Click 'OK' if you would to include numbers in your password");
    //Adds numbers to possible characters for password if user selects 'OK' in prompt
    if (numbers) {
      allCharacters.push (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
      console.log (allCharacters);
    }
    var specialChar = confirm ("Click 'OK' if you would to include special characters in your password");
    //Adds special characters to possible characters for password if user selects 'OK' in prompt
    if (specialChar) {
      allCharacters.push ('!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '\\', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~');
      console.log(allCharacters);
    }
    //If no criteria is selected, alerts user and because no characters were added to possible characters, variable housing the characters will be empty and prompt will be closed
    if (lowercase != true && upercase != true && numbers != true && specialChar != true) {
      alert ("Please select at least one criteria to generate a password. Please click 'Generate Password' again.")
    }
    //Returns possible characters array to criteria() depending on user selection
    return allCharacters;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

