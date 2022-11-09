// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare character options to be used in the password
var letterLowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letterUpChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar = [0,1,2,3,4,5,6,7,8,9];
var specChar = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];  

// Password generation function
function generatePassword() {
  var passLength = prompt("How many characters do you want in your password?");

  if (passLength < 8) {
    alert("Your password must be at least 8 characters long. Please try again.")
  } else {
    var confLetterLow = confirm("Do you want your password to have lowercase letters?");
    var confLetterUp = confirm("Do you want your password to have uppercase letters?");
    var confNumber = confirm("Do you want your password to have numbers?");
    var confSpecial = confirm("Do you want your password to have special characters?");

  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);