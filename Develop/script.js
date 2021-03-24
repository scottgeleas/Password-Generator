// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  let length = prompt("Enter the length of your desired password between 8 - 128 characters");

  if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128")
    generatePassword()
    return
  }
  
  let lower = confirm("Do you want to include lower case letters?");
  let upper = confirm("Do you want to include upper case letters?");
  let number = confirm("Do you want to include numbers?");
  let symbol = confirm("Do you want to include symbols?");

  if (lower === false && upper === false && number === false && symbol === false) {
    alert("YYou must choose at least one set.")
    generatePassword()
    return
  }

  let myPassword = "";

  const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
  const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["!", ",", "$", "%", "&", "'", "\"" , "\\" , "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];

  let selectedSet = [];

  if (lower) {
    selectedSet = selectedSet.concat(lowerCaseLetters);
  }

  if (upper) {
    selectedSet = selectedSet.concat(upperCaseLetters);
  }

  if (number) {
    selectedSet = selectedSet.concat(numbers);
  }

  if (symbol) {
    selectedSet = selectedSet.concat(symbols);
  }

  for (let i = 0; i < length; i++) {
    myPassword += selectedSet[Math.floor(Math.random() * selectedSet.length)];
  }

  return myPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

