// Assignment code here

// //Function to get password inputs
// var passwordCharacters = function () {

// }

// console.log(characterNumber);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

buttonEl.addEventListener("click", function () {
  alert("button clicked");
});

function generatePassword() {
  // console.log("You clicked the button!");
  // window.alert("Hello! Please select password length");

  // let lower = "abcdefghijklmnopqrstuvwxyz";
  // let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // lower = lower.split("");
  // upper = upper.split("");
  // console.log(lower);
  // for (let i = 0; i < str.length; i++) {
  //   console.log(str.charCodeAt(i), str[i]);
  // }

  //let length = prompt('enter a length')

  // 1. prompt the user for the password criteria
  // a. password length 8 - 128
  // b. lowercasse, uppercase, numbers, special characters
  // 2. validate the input.
  // 3. Generate password based on criteria

  return "Generated password will go here!";
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
