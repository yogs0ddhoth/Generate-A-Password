var generateBtn = document.querySelector("#generate");

var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsNumeric = "0123456789";
var charsSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var charBank = "";

function chooseCharacters() {
  var confirmUpper = confirm("Do you want your password to include Uppercase Letters?");
  if (confirmUpper) {
    charBank += charsUpper;
    console.log(charBank);
  }
  var confirmLower = confirm("Do you want your password to include Lowercase Letters?");
  if (confirmLower) {
    charBank += charsLower;
    console.log(charBank);
  }
  var confirmNumeric = confirm("Do you want your password to include Numbers?");
  if (confirmNumeric) {
    charBank += charsNumeric;
    console.log(charBank);
  }
  var confirmSpecial = confirm("Do you want your password to include Special Characters?");
  if (confirmSpecial) {
    charBank += charsSpecial;
    console.log(charBank);
  }
}

function generatePassword() {
  console.log("Hey! You clicked the button!");
  
  var generatedPassword = "";
  var passwordLength = prompt("Choose your password length \n(Choose a number between 8 and 128)");
  Number(passwordLength);
  console.log(passwordLength);
  
  if (
    isNaN(passwordLength) || 
    passwordLength < 8 || 
    passwordLength > 128
  ) {
    console.log("error1");
    alert("Error! \nChoose a number between 8 and 128");
    generatePassword();
  } else {
    chooseCharacters();

    if (charBank.length == 0) {
    console.log("error2");
    alert("Error! \nChoose characters.");
    chooseCharacters();
    
    } else for (var i = 0; i < passwordLength; i++) {
      generatedPassword += charBank.charAt(Math.floor(Math.random()*charBank.length));
    }
    
    console.log(generatedPassword);
    return generatedPassword;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  console.log(password);
}

generateBtn.addEventListener("click", writePassword);