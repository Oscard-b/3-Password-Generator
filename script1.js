// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function that creates password and writes it to the div with the id = "password" where the user can see it
function writePassword() {
  // Prompts to choose character types
  var lowerConfirm = confirm("Include lowercase characters?");
  if (lowerConfirm === true) {
    alert("Lowercase letters approved.");
  };
  var upperConfirm = confirm("Include uppercase characters?");
  if (upperConfirm === true) {
    alert("Uppercase letters approved.");
  };
  var numConfirm = confirm("Include numeric characters?");
  if (lowerConfirm === true) {
    alert("Numeric characters approved.");
  };
  var specialConfirm = confirm("Include special characters?");
  if (lowerConfirm === true) {
    alert("Special characters approved.");
  };

  // Propmts to chooose character length
  var passLength = prompt("Choose your password length. Password length must be no less than 8 characters or more than 128 characters.");
  if (passLength < 8 || passLength > 128) {
    alert("Please type a number between 8 and 128.");
    var passLength = prompt("Choose your password length. Password length must be no less than 8 characters or more than 128 characters.");
  }
  else if (isNaN(passLength)) {
    alert("Please type a number between 8 and 128.");
    var passLength = prompt("Choose your password length. Password length must be no less than 8 characters or more than 128 characters.");
  };

  // Characters confirmed will be added to this array
  var charactersArr = [];
  // Character options based on the confirms
  var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  // Characters chosen by user are pushed into charactersArr and used to create the password
  if (lowerConfirm === true) {
    for (var i = 0; i < lowerOptions.length; i++) {
      charactersArr.push(lowerOptions[i]);
    };
  };
  if (upperConfirm === true) {
    for (var i = 0; i < upperOptions.length; i++) {
      charactersArr.push(upperOptions[i]);
    };
  };
  if (numConfirm === true) {
    for (var i = 0; i < numOptions.length; i++) {
      charactersArr.push(numOptions[i]);
    };
  };
  if (specialConfirm === true) {
    for (var i = 0; i < specialOptions.length; i++) {
      charactersArr.push(specialOptions[i]);
    };
  };
  
  console.log(charactersArr);

  // Password is generated based on user's criteria
  function generatePassword(array, length) {
    var result = ""
    for (var i = 0; i < length; i++) {
      result += array[Math.floor(Math.random() * charactersArr.length)]
    };

    return result;
  };

  var password = generatePassword(charactersArr, passLength);

  console.log(password);

  // Password is appended to the div with the id = "password" where the user can see it
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};