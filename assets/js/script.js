var generateBtn = document.querySelector("#generate");

// declares variables for character type options:
let charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsLower = "abcdefghijklmnopqrstuvwxyz";
let charsNumeric = "0123456789";
let charsSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// allows user to select character types:
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
  // all steps are console logged to aid debugging
}

function generatePassword() {
  console.log("Hey! You clicked the button!");
  var charBank = "";
  var generatedPassword = "";
  var passwordLength = prompt("Choose your password length \n(Choose a number between 8 and 128)");
  Number(passwordLength);
  console.log(passwordLength);
  
  // validates password length with criteria, and provides reset if criteria are not met:
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

    // validates that at least one set of character types is selected, and provides reset if none are:
    if (charBank.length == 0) {
    console.log("error2");
    alert("Error! \nChoose characters.");
    chooseCharacters();
    
    // generates password at random from selected character types:
    } else for (var i = 0; i < passwordLength; i++) {
      generatedPassword += charBank.charAt(Math.floor(Math.random()*charBank.length));
      console.log("Password Generated.")
    }
    return generatedPassword;
  }
  // steps include console logs to aid debugging
}

// displays password in document:
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);