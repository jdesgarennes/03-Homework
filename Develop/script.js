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

// Make sure it is > 8  and < 128.

// if character is less than < or over 128 then start over.

// promt to ask " do you want numbers?"

// prompt to ask "do you want special charachters?"


//promt to ask "do you want to include uppercase letters"


//record options inputed to var



//if(!hasLowercase && !hasNumbers && !hasUpperCase && !hasSpecialCharacters ){
  // need to alert
//  ("Please reenter with valid paramenters. May need to reload the page.");
//}
// My final password array

var options = {
  length: length,
  hasLowercase: true,
  hasNumbers: true,
  hasUpperCase: true,
  hasSpecialCharacters: true,
}
// create function for getting random input from array

function getRandomStuff(array) { 
  return array[Math.floor(Math.random() *array.length)];
}
// Create a generate function password

var finalPassword =[];

function generatePassword(){
  // need gaurentee of at least one type selected
  //need an array for final password
  // need array for gaurenteee 
  // need an array for possible characters

  // for every character type selected you need to concat the existing character array into the possible array

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
    console.log(finalPassword);
  }

}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
