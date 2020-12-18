//user input variable
var enter='';
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//Special characters
character = ["*", "@", "%", "!", "#", "+", "-", "$", "=", "(", ")", "?"];
number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "p", "q", "r", "s", "t", "u", "v", "w", "x",  "y", "z"];
upperCase = [];
//Choices declared
var choices =[];
var toUpper = function (x) {
    return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

// Get generate button element using element id
var generateBtn=document.getElementById("generate");

// add event listener to generate button
generateBtn.addEventListener("click", function () {
    var password = generatePassword();
    // assign generated password to Password text area
    document.getElementById("password").placeholder = password;
});
//function to generate password
function generatePassword() {
    //'enter' stores users input (ie. 15)
    passwordLength = parseInt(prompt("How many character you like for your password? choose between 8 to 128"));
    // console.log(enter)
    if (!passwordLength) {
        alert("This needs a value");
        return "You must enter password length between 8 and 128. Please try again!"; 
    } else if (passwordLength > 8 && passwordLength < 128) {
        
        confirmNumber = confirm("this contain number?"); // true or false
        confirmCharacter = confirm("this contain special characters");
        confirmUppercase = confirm("this contain uppercase letters?");
        confirmLowercase = confirm("this contain lowercase letters?");
        
  


  //If user chooses 0 criterias 
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose at least 1 criteria. Please try again!");
    return "You must choose at least 1 criteria. Please try again!"; 
  }
  else {
    //If user chooses all 4 criterias 
    if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      choices = character.concat(number,lowerCase,upperCase);
    }
    //if user chooses characters, numbers and lower case letters but not upper case letters
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number,lowerCase);
    }
    //if user chooses characters, numbers and upper case letters but not lower case letters
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number,upperCase);
    }
    //if user chooses characters,lowercase and uppercase letters but not numbers
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(lowerCase,upperCase);
    }
    //if user chooses numbers,lowercase and uppercase letters but not characters
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(lowerCase,upperCase);
    }

    //if user chooses characters and numbers but not lower case letters and upper case letters
    else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);
  }


    //if user chooses characters and lower case but not number and uppercase letters
    else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(lowerCase);
    }

    //if user chooses characters and uppercase but not number and lowercase letters
    else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(upperCase);
    }  


   //if user chooses number and lowercase but not number and uppercase letters
    else if (confirmNumber && confirmLowercase) {
      choices = number.concat(lowerCase);
    }  
    
    //if user chooses numbers and uppercase but not character and lowercase letters
    else if (confirmNumber && confirmUppercase) {
      choices = number.concat(upperCase);
    }  
    //if user chooses lowercase and uppercase but not character and numbers
    else if (confirmLowercase && confirmUppercase) {
      choices = lowerCase.concat(upperCase);
    }
    
    //if user character but not lowercase, uppercase and numbers
    else if (confirmCharacter) {
      choices = character;
    }

    //if user number but not character,lowercase and uppercase 
    else if (confirmNumber) {
      choices = number;
    }


     //if user lowercase but not character,number and uppercase 
     else if (confirmLowercase) {
      choices = lowerCase;
    }
      
    //if user uppercase but not character,number and lowercase
     else if (confirmUppercase) {
      choices = upperCase;
    }


    console.log("choices =",choices);
    console.log("Password Length =",passwordLength); 

    //passwordList variable is an array placeholde for user generate amount of length
    var passwordList = []; 
    //loop through the randomized array the number of times as the user chose their password length 
    for(var i=1;i<=passwordLength;i++){
      //pick randomly from choices 
      var pickRandome = choices[Math.floor(Math.random() * choices.length)];
      // store picked value to password array
      passwordList.push(pickRandome);
    }
  
    // convert password array to string
    var password= passwordList.join("");
    console.log("Password =",password);
  
    return password; 
  }
    }
    else{
      alert("You must enter password length between 8 and 128. Please try again!");
      return "You must enter password length between 8 and 128. Please try again!"; 
    }
}