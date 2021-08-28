// Assignment Code
var generateBtn = document.querySelector("#generate");
// Define all the possible array types like letter numbers and special characters.

//All lower case character letters 
var lowerCasedLetters =[
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//All Upper case character letters 
var upperCasedLetters =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//All numbers 
var allNumbers =['0','1','2','3','4','5','6','7','8','9'];
//All Special characters 
var specialCharaters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
// Check to make sure escape sequences work :)
//console.log(specialCharaters[1],specialCharaters[6], specialCharaters[23]);


var possibleCharacters = [];
var finalPassword = [];

// Create a prompt to ask how many characters in the password you would like.






function getparams(){
var passLength = prompt("Please enter the desired password length between 8 and 128 characters.");
  if(Number.isNaN(passLength)){
  alert("Please input a Number only!");
  return;
}
if(passLength <8){
  alert("Password length is to short, Must be at least 8 characters!");
  return
}
if(passLength >128){
  alert(" Password length is too large, Must be less than 129 characters!")
}
var hasSpecialCharacters = confirm("Click to confirm that you want Special characters in password.");

var hasUpperCase = confirm("Click to confirm that you want UPPERCASE letters in password.");

var hasLowercase = confirm("Click to confirm that you want lowercase letters in password.");

var hasNumbers = confirm("Click to confirm that you want numbers in password.");

if(!hasLowercase && !hasNumbers && !hasUpperCase && !hasSpecialCharacters ){
  alert("You must enter at least one type of option for password");
  return;
}


var options = {
    length: passLength,
    hasLowercase: hasLowercase,
    hasNumbers: hasNumbers,
    hasUpperCase: hasUpperCase,
    hasSpecialCharacters: hasSpecialCharacters,
  }
return options;
}

// create function for getting random input from array
function getRandomStuff(array) { 
  return array[Math.floor(Math.random() *array.length)];
}


// Create a generate password function
function generatePassword(){

  var options = getparams();

  if (options.hasSpecialCharacters){
    possibleCharacters = possibleCharacters.concat(specialCharaters);
    finalPassword.push(getRandomStuff(specialCharaters));
  }
  if (options.hasUpperCase){
    possibleCharacters = possibleCharacters.concat(upperCasedLetters);
    finalPassword.push(getRandomStuff(upperCasedLetters));
  }
  if (options.hasNumbers){
    possibleCharacters = possibleCharacters.concat(allNumbers);
    finalPassword.push(getRandomStuff(allNumbers));
  }
  if (options.hasLowercase){
    possibleCharacters = possibleCharacters.concat(lowerCasedLetters);
    finalPassword.push(getRandomStuff(lowerCasedLetters));
  }
  for (var i = finalPassword.length; i< options.length; i++){
    var finalResult = getRandomStuff(possibleCharacters);
    finalPassword.push(finalResult)
  }
return finalPassword.join("");

}

generatePassword();
var gwpassword = finalPassword.join("");



console.log(finalPassword);
console.log(gwpassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
