// Assignment code here

//hello!!!

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You clicked the button!");

  // 1. prompt the user for the password criteria
  // a. password length 8 - 128
  // b. lowercasse, uppercase, numbers, special characters
  // 2. validate the input.
  // 3. Generate password based on criteria 

  return "Generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
