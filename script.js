// Assignment Code

// Write password to the #password input
  var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['~','!','@','#','$','%','^','&','*',':',';','<','>',',','/','?','.'];

  // write if, else if, else statement for number of characters btw 8-128
  if (characterNumber < 8 || characterNumber > 128){
    return "Pick a password that is between 8 and 128 characters";
  } else {
    alert ("Your password contains" + characterNumber + "characters.");
  }
  // Asking what character types to include in password
  characterType = alert ("What types of characters do you want to include in your password?");
// write confirmation alerts to include uppercase, lowercase, numeric, and/or special characters if, else?


  // write random password generator 
  // write alert once password is generated 


var generateBtn = document.querySelector("#generate");
// function generatePassword() {};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
