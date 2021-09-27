# Password Generator

## Table of Contents

- [Description](#description)

- [Deployed Link](#deployed-link)

- [Repository](#Repository)

- [TechnonlogyUse](#Technonlogy-Use)

- [CodeSnippets](#CodeSnippets)

- [License](#license)

- [Question](#Question)

## Description

This rundomly password generator Responsive web application. also has from 8 to 128 different Character numbers and uppercase alphs and lowercase alphs.

## Image

![image](./Assets/03-javascript-homework-demo.png)

## Deployed Link

- https://abuyem1.github.io/Password-Generator/

## Repository

- Open The Browsers

# Tecnologies Used

- HTML
- CSS
- JavaScript

## Code Snippet

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

## License

![badge](https://shields.io/badge/license-MIT-green)

## Question

- [Email](abuye20@yahoo.com)

- [LinkedIn](https://www.linkedin.com/in/abuye-mamuye-5a49921b0/)

- [GitHub](https://github.com/AbuyeM1)

## Acknowledgments

- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp
