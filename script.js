// Assignment Code

// Write password to the #password input
function createPassword () {
  var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['~','!','@','#','$','%','^','&','*',':',';','<','>',',','/','?','.'];
  var anyCharacter = [""];
}

  // write if, else if, else statement for number of characters btw 8-128
  if (characterNumber < 8 || characterNumber > 128){
    alert ("Pick a password that is between 8 and 128 characters");
  } else {
    confirm ("Your password contains" + characterNumber + "characters.");
  }
// Asking what character types to include in password
var characterType = prompt ("What types of characters do you want to include in your password?");
// write confirmation alerts to include uppercase, lowercase, numeric, and/or special characters if, else?
var wantsUppercase = prompt ("Do you want to include uppercase characters in your password?");
if (wantsUppercase){
  var includeUppercase = alert ("You have selected to include uppercase characters.");
}else{
  alert ("You will not include any uppercase characters.");
}

var wantsLowercase = prompt("Do you want to include lowercase characters in your password?");
if (wantsLowercase){
  var includeLowercase = alert ("You have selected to include lowercase characters.");
}else{
  alert ("You will not include any lowercase characters.");
}

var wantsNumeric = prompt ("Do you want to include numbers in your password?");
if (wantsNumeric){
  var includeNumeric = alert ("You have selected to include numeric characters.");
}else{
  alert ("You will not include any numeric characters.");
}

var wantsSpecial = prompt("Do you want to include special characters in your password?");
if (wantsSpecial){
  var includeSpecial = alert ("You have selected to include special characters.");
}else{
  alert ("You will not include any special characters.");
}

// Validate input and at least one character type should be selected 
 

// function generatePassword() {};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}


// write random password generator 
  function randomPassword () {
    for (var i= 8; i <= 128; i++){
    var randomNumber = Math.floor(Math.random()* anyCharacter.length);
    return randomPassword;
  }
  
 // write alert once password is generated 
function passwordGenerated(){
  alert ('Your password has been created');
}
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
