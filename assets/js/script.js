// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare character options to be used in the password
var letterLowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letterUpChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar = ["0","1","2","3","4","5","6","7","8","9"];
var specChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var thePassword = "";

// Password generation function
function generatePassword() {
  var passLength = Number(prompt("How many characters do you want in your password?"));
  var passCharType = [];
  var charTypeArr = [];
  thePassword = "";

  // Checks to see if user input a number and meets minimum and maximum required password length
  if (passLength < 8 || passLength > 128 || isNaN(passLength) || passLength === null) {
    alert("Please enter a number. Your password must be at least 8 characters long and no more than 128 characters. Please try again.")
    return;
  } else {
    // Prompts user for the type of characters used in the password
    if (confirm("Do you want your password to have lowercase letters?")) {
      passCharType = passCharType.concat(letterLowChar);
      charTypeArr.push(letterLowChar);
    };
    if (confirm("Do you want your password to have uppercase letters?")) {
      passCharType = passCharType.concat(letterUpChar);
      charTypeArr.push(letterUpChar);
    }
    if (confirm("Do you want your password to have numbers?")) {
      passCharType = passCharType.concat(numChar);
      charTypeArr.push(numChar);
    };
    if (confirm("Do you want your password to have special characters?")) {
      passCharType = passCharType.concat(specChar);
      charTypeArr.push(specChar);
    };
  };

  // Checks if at least one character type was selected
  if (passCharType.length == 0) {
    alert("You must select at least one character type. Please try again.");
  };

  // Password generation logic, follows a pattern to ensure each selected character type is used once
  var loop = charTypeArr.length;
  loop--;
  for (var a = 0; a < passLength; a++) {
    if (loop === -1) {
      loop = charTypeArr.length;
      loop--;
    }
    thePassword = thePassword.concat(charTypeArr[loop][Math.floor(Math.random() * charTypeArr[loop].length)]);
    loop--;
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