// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
  var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['~','!','@','#','$','%','^','&','*',':',';','<','>',',','/','?','.'];

  var possibleCharacters = [];
  var guaranteedCharacters = [];

  
// Function if the user's password is less than 8 characters or greater than 128
function generatePassword() {
  var characterLength = window.prompt ("How many characters do you want to include?");
  if (characterLength < 8 || characterLength > 128) {
    window.alert ("Your password length must be between 8 and 128 characters.")
    return
    // Includes an if statement if a number is not selected
  }else if (isNaN(characterLength)) {
    window.alert ("Error: A number has not been selected .")
    return
  } else {
    
}

// wrote confirmations to include uppercase, lowercase, numeric and special. 
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
// Gives alert if user does not select at least one type of character. 
if (wantsLowercase === false && wantsUppercase === false && wantsNumeric === false && wantsSpecial === false){
  window.alert ("You must choose at least one type of character.")
  return
}
// Work in progress random password generator. 
// generating a random password based on what the user input
var userPassword = ""
for (var i= 0; i <= possibleCharacters.length; i++){
  var userPassword = Math.floor(Math.random() *possibleCharacters.length);
  userPassword.push(possibleCharacters)
  // write alert once password has been generated 
  window.alert ("Your password has been created.")
}
return userPassword

}

// function writePassword() {};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
