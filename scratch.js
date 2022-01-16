
var generateBtn = document.querySelector("#generate");

function myFunction() {
  var length = prompt("How many characters?"); // minimum 8, maximum 256

  while(length < 8) {
    length = prompt("How many characters?"); 
  }


  var upper = confirm("Would you like to include upper case letters?");
  var lower = confirm("Would you like to include lower case letters?");
  // var special = prompt("Would you like to inclide special characters?");
  // var numbers = prompt("Would you like to include numbers?");

  var upperCasePool = ["A", "B", "C", "D", "E"]
  var lowerCasePool = ["a", "b", "c", "d", "e"]
  //                    0    1    2    3    4

  var selectedPool = [];

  // filter
  if(upper === true) {
    selectedPool = selectedPool.concat(upperCasePool)
  } 
  
  if(lower === true) {
    selectedPool = selectedPool.concat(lowerCasePool)
  }

  var generatedPassword = "";

  for (let i = 0; i < length; i++) {

    var randomNumber = Math.floor(Math.random() * selectedPool.length);

    generatedPassword = generatedPassword + selectedPool[randomNumber];
    // generatedPassword += myLetter;

    
  }

  return generatedPassword;
}

// generateBtn.addEventListener("click", myFunction);

// if (window.prompt === "yes" || window.prompt === "YES") {

//   prompt()

// } else if (window.prompt = "" || window.prompt = null) {

// });

//just commented out 1:49pm
// buttonEl.addEventListener("click", function () {
//   alert("button clicked");
// });

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


// Write password to the #password input
function writePassword() {
  var password = myFunction()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
