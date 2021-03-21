// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// -------------------------------------------------------------------------------------------------------------------
  function randomPassword(length) {
    var special = [
    " ",
    "!",
    "”",
    "#",
    "$",
    "%",
    "&",
    "’",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
    var pass = passwords[Math.floor(Math.random() * special.length)];
    return pass;
  };

function generate() {
  myform.password.value = randomPassword(myform.length.value);
}
