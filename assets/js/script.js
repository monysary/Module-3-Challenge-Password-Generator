// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare character options to be used in the password
var letterLowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letterUpChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar = ["0","1","2","3","4","5","6","7","8","9"];
var specChar = [,"!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];  
var passCharType = []
var thePassword = ""

// Password generation function
function generatePassword() {
  var passLength = Number(prompt("How many characters do you want in your password?"));
  thePassword = ""

  // Checks to see if user input means minimum required password length
  if (passLength < 8) {
    alert("Your password must be at least 8 characters long. Please try again.")
  } else {
    var confLetterLow = confirm("Do you want your password to have lowercase letters?");
    if (confLetterLow) {passCharType = passCharType.concat(letterLowChar)};
    var confLetterUp = confirm("Do you want your password to have uppercase letters?");
    if (confLetterUp) {passCharType = passCharType.concat(letterUpChar);}
    var confNumber = confirm("Do you want your password to have numbers?");
    if (confNumber) {passCharType = passCharType.concat(numChar)};
    var confSpecial = confirm("Do you want your password to have special characters?");
    if (confSpecial) {passCharType = passCharType.concat(specChar)}
  };

  // Use for loop to concatenate characters into thePassword string
  for (var i = 0; i < passLength; i++) {
    thePassword = thePassword.concat(passCharType[Math.floor(Math.random() * passCharType.length)])
  };

  return;
}

// Write password to the #password input
function writePassword() {
  generatePassword()
  var password = thePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);