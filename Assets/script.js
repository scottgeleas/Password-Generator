var generateBtn = document.querySelector("#generate");
// clicking generate password on the page will run this function
function generatePassword() {
  let length = parseInt(prompt("Enter the length of your desired password between 8 - 128 characters"));

  if (isNaN(length)) {
    alert("You must enter a numerical length.");
    return generatePassword();
  }

  // length must be between 8 and 128 characters or an alert pops up and run generatePassword again
  if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128");
    return generatePassword();
  }

  // these confirms let you choose what characters sets to you in your password
  let lower = confirm("Do you want to include lower case letters?");
  let upper = confirm("Do you want to include upper case letters?");
  let number = confirm("Do you want to include numbers?");
  let symbol = confirm("Do you want to include symbols?");

  // If you dont choose one set It will display a messages and run the generatePassword function again
  if (lower === false && upper === false && number === false && symbol === false) {
    alert("You must choose at least one set.");
    return generatePassword();
  }

  let myPassword = "";

  // these constants hold arrays of characters by type 
  const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["!", ",", "$", "%", "&", "'", "\"", "\\", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];

  // selectedSet hold all character selections made by the user
  let selectedSet = [];

  // If (__) = true / is selected on the webpage, the set containing the characters is added to selectedSet
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

  // this for loop cycles through the selectedSet sets of characters  and randomly picks one from each set until the entered length is met
  for (let i = 0; i < length; i++) {
    myPassword += selectedSet[Math.floor(Math.random() * selectedSet.length)];
  }

  return myPassword;
}

// writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
