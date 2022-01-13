
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!")

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

  return "Generated Password"
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
