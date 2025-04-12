// Problem: Valid Palindrome  

// Category: Two Pointers  

// Difficulty: Easy  

// Description: Given a string s, return true if it is a palindrome, or false otherwise.  
// A palindrome is a word, phrase, number, or other sequence of characters 
// that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).  
// You need to implement a function that checks if a string is a palindrome.

var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) {
      return true;
    };
  
    let word = '';
    let wordToCompare = '';
  
    for (let i = 0; i < s.length; i++) {
        let init = s.toLowerCase();
        if ((init.charCodeAt(i) > 47 && init.charCodeAt(i) < 58) ||
            (init.charCodeAt(i) > 96 && init.charCodeAt(i) < 123)) {
                wordToCompare += init[i];
            };
          };
  
    for (let i = wordToCompare.length - 1; i >= 0; i--) {
        word += wordToCompare[i];
    };
  
    if (word === wordToCompare) {
        return true;
    } else {
        return false;
    }
  };
