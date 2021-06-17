// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    let reversed = ' ';

    for (let character of str) {
        reversed = character + reversed;

        if (reversed === str)

        return true;

        else ( reversed !== str)

        return false;

    }

    reversed();

}


module.exports = palindrome;


//What we know//
//Take in a string 
// If the string is the same as the reversed version of the string return strue else return fasle

//take in the str
// reverse the string
//compare the orgianl string to the reversed string
//if the strings match return
//else return false.
//you have to consider the 

//Returning True or False
// Boolean?