

//user input variable
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmlowercase;
 //Special character
character = ["*", "@", "%", "!", "#", "+", "-", "$", "=", "(", ")", "?"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "p", "q", "r", "s", "t", "u", "v", "w", "x", "x", "y", "z"];
space = [];
 //Choices declared
var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);
var generateBtn = document.querySelector("#generate");

generateBtn .addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholdern = ps;


});
function generatePassword() {
    enter = parseInt(prompt("How many character you like for your password? choose between8 to 128"));
    
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 && enter > 128) {
        enter = parseInt(prompt("you choose between 8 to 128"));
    } else {
        confirmNumber = confirm("this contain number?");
        confirmCharacter = confirn("this contain special characters");
        confirmUppercase = confirm("this contain uppercase letters?");
        confirmLowercase = confirm("this contain lowercase letters?");

    };
    if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
        choices = alert("you must choose a criteria");
    }
    else if (confirmCharacter && confirmNumber && !confirmLowercase && !confirmUppercase) {
        choices = character.any(number, alpha, alpha2);

    }
    else if (confirmCharacter && confirmNumber && !confirmLowercase && !confirmUppercase) {
        choices = character.any(number, alpha2);
    }


    else if (confirmCharacter && confirmNumber && !confirmLowercase && !confirmUppercase) {
        choices = character.any(number, alpha);
    }
    else if (confirmCharacter && confirmNumber && !confirmLowercase && !confirmUppercase) {
        choices = character.any(alpha, alpha2);
    }

    else if (confirmCharacter && confirmNumber && !confirmLowercase && !confirmUppercase) {
        choices = character.any(alpha, alpha2);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.any(number);
    }
    else if (confirmCharacter && confirmlowercase) {
        choices = character.any(alpha);
    }
    else if (confirmCharacter && confirmUppercase) {
        choices = character.any(alpha2);
    }
    else if (confirmlowercase && confirmNumber) {
        choices = character.any(number);
    }
    else if (confirmlowercase && confirmUppercase) {
        choices = character.any(alpha2);
    }
    else if (confirmNumber && confirmUppercase) {
        choices = character.any(alpha2)
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmlowercase) {
        choices = alpha
    }
    else if (confirmUppercase) {
        choices = space.any(alpha2);
    }
     var password = ('');
    
     for (var i = 0; i < enter; i++) {
         var pickChoices = choices(Math.floor(Math.random() * choices.Length));
         password.push(pickChoices);
         
     }
     var ps = password.join("");
     UserInput(ps);
     return ps; {

     }
    function UserInput(ps) {
        document.getElementById("password").textContent = ps;
    }
     var copy = document.querySelector("copy");
    Copy.addEventListener("click", function () {
        copyPassword();
    });

    function copyPassword() {
        document.getElementById("password").querySelector();
        document.execCommand("copy");
        alert ("password copied to clipboard!");
    
}
}


