// Assignment Code

// Write password to the #password input
  var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['~','!','@','#','$','%','^','&','*',':',';','<','>',',','/','?','.'];

  var possibleCharacters = [];
  var guaranteedCharacters = [];
  var result = [];
  

 
  // write if, else if, else statement for number of characters btw 8-128
  // if (characterNumber > 8 && characterNumber < 128){
  //   confirm ("Your password contains " + characterNumber + " characters.");
  // } else {
  //   alert ("Your password must include between 8 and 128 characters.")
  // }
function getRandom() {
  return Math.floor(Math.random()*character.length)
}
// Function if the user's password is less than 8 characters or greater than 128
function createPassword() {
  var characterLength = window.prompt ("How many characters do you want to include?");
  if (characterLength < 8) {
    window.alert ("Your password must include at least 8 characters.")
  } 

  if (characterLength > 128){
    window.alert ("Your password must be less than 128 characters.")
  }
// Includes an if statement if a number is not selected 
  if (isNaN(characterLength)) {
    window.alert ("Error: A number has not been selected .")
  }
// wrote confirmations to include uppercase, lowercase, numeric and special
var wantsUppercase = window.confirm("Do you want to include uppercase characters in your password?")
if (wantsUppercase === true) {
  possibleCharacters.push(uppercaseCharacters)
}

var wantsLowercase = window.confirm("Do you want to include lowercase characters in your password?")
if (wantsLowercase === true) {
  possibleCharacters.push(lowercaseCharacters)
}

var wantsNumeric = window.confirm("Do you want to include numbers in your password?")
if (wantsNumeric === true) {
  possibleCharacters.push(numericCharacters)
}

var wantsSpecial = window.confirm("Do you want to include symbols in your password?")
if (wantsSpecial === true) {
  possibleCharacters.push(specialCharacters)
}

if (possibleCharacters.length === 0) {
  window.alert ("You must choose at least one type of character.")
}
// working on password randomizer generator 
for (var i= 0; i <= character.length; i++){
  var possibleCharacters = getRandom(possibleCharacters.length)
  result.push(possibleCharacters)
}
// write alert once password has been generated 
function passwordGenerated(){ 
  window.prompt ("Your password has been created.")
}
}


// function generatePassword() {};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// write random password generator. if/else statement for uppercase array, lowercase array etc 
  // function randomPassword () {
  //   for (var i= 0; i <= character.length; i++){
  //   var randomNumber = Math.floor(Math.random()); 
  //   return randomPassword;
  // }
  

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 
