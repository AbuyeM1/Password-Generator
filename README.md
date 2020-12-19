# 03 JavaScript: Password Generator

  ## Image shows the web application's appearance and functionality:

    ![alt text](https://lh3.googleusercontent.com/wpx2Vw66YujTxFrjZmtShGycKEQ7aUZihZzV2MoeXLw2x4S1DV0rr82Le19n6gOd6ZHQ9g=s400)
    ![alt text](https://lh3.googleusercontent.com/ACUPL9TnrseARbEcT1pk9H1-28f0iyqQGOSowaLkQW4Sf1uui_J3VZeI6U_rpTGOgBw3=s400)
    ![alt text](https://lh3.googleusercontent.com/AI3agBVTWI9JKzNZTAUFnCCoKEWbl_jlIJ6jnQ2ECTp305uaCw-Aob-OOm5u57x5BoCDsw=s400)
    ![alt text](https://lh3.googleusercontent.com/AI3agBVTWI9JKzNZTAUFnCCoKEWbl_jlIJ6jnQ2ECTp305uaCw-Aob-OOm5u57x5BoCDsw=s400)

   ## Tecnologies Used

    * HTML
    * CSS
    * JavaScript

  ## Summary

    This rundomly  password generator Responsive web application.
    also has from 8 to 128 different Character ,numbers and uppercase alphs and lowercase alphs.





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



  ## Author Links
      
    * [GitHub](https://github.com/AbuyeM1)
    * [GitHub](https://abuyem1.github.io/Password-Generator/)
 


































