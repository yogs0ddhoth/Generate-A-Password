
var generateBtn = document.querySelector("#generate");

var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsNumeric = "0123456789";
var charsSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
  console.log("Hey! You clicked the button!");

  /* 
  open prompts { 
    series of password criteria {
      choseLength. length of 8 <= 128 characters;
    }
      
    confirm characterType
    [lowercase, uppercase, mumeric, special char];
    
    validate charType -> log var?  
    
  }
  */
  var passwordLength = prompt("Choose your password length \n(Choose a number between 8 and 128)");
  console.log(passwordLength);

  var charBank = "";

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

  return "Generated Password"
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
