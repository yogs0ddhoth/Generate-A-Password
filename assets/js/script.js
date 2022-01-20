var generateBtn = document.querySelector("#generate");

var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsNumeric = "0123456789";
var charsSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var charBank = "";

function generatePassword() {
  console.log("Hey! You clicked the button!");

  var passwordLength = prompt("Choose your password length \n(Choose a number between 8 and 128)");
  console.log(passwordLength);

  var confirmUpper = window.confirm("Do you want your password to include Uppercase Letters?");
  if (confirmUpper) {
    charBank += charsUpper;
    console.log(charBank);
  }
 
  var confirmLower = window.confirm("Do you want your password to include Lowercase Letters?");
  if (confirmLower) {
    charBank += charsLower;
    console.log(charBank);
  }

  var confirmNumeric = window.confirm("Do you want your password to include Numbers?");
  if (confirmNumeric) {
    charBank += charsNumeric;
    console.log(charBank);
  }

  var confirmSpecial = window.confirm("Do you want your password to include Special Characters?");
  if (confirmSpecial) {
    charBank += charsSpecial;
    console.log(charBank);
  } 

  var bankLength = charBank.length;
  console.log(bankLength);

  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += charBank.charAt(Math.floor(Math.random()*bankLength));
  }
  console.log(generatedPassword);
  return generatedPassword;
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
