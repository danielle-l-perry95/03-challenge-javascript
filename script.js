// Assignment Code
var generateBtn = document.querySelector("#generate");
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
// two separate if statements one for less than 8 and one for greater than 128 true/false. Make sure you are given a number.
function createPassword() {
  var characterLength = window.prompt ("How many characters do you want to include?");
  if (characterLength < 8) {
    alert ("Your password must include at least 8 characters.")
  } 

  if (characterLength > 128){
    alert ("Your password must be less than 128 characters.")
  }

  if (isNaN(characterLength)) {
    alert ("Your password must be less than 128 characters.")
  }

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
  alert ("You must choose at least one type of character.")
}

for (var i= 0; i <= character.length; i++){
  var possibleCharacters = getRandom(possibleCharacters.length)
  result.push(possibleCharacters)
}
}

// write CONFIRMS to include uppercase, lowercase, numeric, and/or special characters. ALERT when user input is incorrect. Can be in one long if statement


// var wantsUppercase = prompt ("Do you want to include uppercase characters in your password?");
// if (wantsUppercase){
//   var includeUppercase = alert ("You have selected to include uppercase characters.");
// }else{
//   alert ("You will not include any uppercase characters.");
// }

// var wantsLowercase = prompt("Do you want to include lowercase characters in your password?");
// if (wantsLowercase){
//   var includeLowercase = alert ("You have selected to include lowercase characters.");
// }else{
//   alert ("You will not include any lowercase characters.");
// }

// var wantsNumeric = prompt ("Do you want to include numbers in your password?");
// if (wantsNumeric){
//   var includeNumeric = alert ("You have selected to include numeric characters.");
// }else{
//   alert ("You will not include any numeric characters.");
// }

// var wantsSpecial = prompt("Do you want to include special characters in your password?");
// if (wantsSpecial){
//   var includeSpecial = alert ("You have selected to include special characters.");
// }else{
//   alert ("You will not include any special characters.");
// }

 

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
  
 // write alert once password is generated. If generatePassword = true then alert?
// function passwordGenerated(){
//   alert ('Your password has been created');
// }
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); 
