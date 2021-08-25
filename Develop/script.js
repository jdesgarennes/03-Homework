// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define all the possible array types like letter numbers and special characters.

//All lower case character letters with a console log checking them
var lowerCasedCharacters =[
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowerCasedCharacters[2]);

//All Upper case character letters with a console log checking them

var upperCasedCharacters =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
console.log(upperCasedCharacters[2]);

//All numbers with a console log checking them

var allNumbers =['0','1','2','3','4','5','6','7','8','9'];
console.log(allNumbers[2]);

//All Special characters with a console log checking them

var specialCharaters = ['!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
// Check to make sure escape sequences work :)
console.log(specialCharaters[1],specialCharaters[6], specialCharaters[23]);








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
