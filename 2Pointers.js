//     2  POINTERS    //
///////////////////////

//  VALID PALINDROME
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 */
const isPalindrome = (s) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the cleaned string with its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
};

// or

var isPalindromes = function(s) {
    // Base case
    if(s==null)  return false;
    // Take in lowercase character...
    s = s.toLowerCase();
    // Initialize two pointer variables, left and right and point them with the two ends of the input string...
    let left = 0;
    let right = s.length - 1;
    // Traverse all elements through the loop...
    while(left < right){
        // Move the left pointer to right so it points to a alphanumeric character...
        while(left < right && !((s.charAt(left) >= 'a' && s.charAt(left) <= 'z') || (s.charAt(left) >= '0' && s.charAt(left) <= '9'))){
            left++;
        }
        // Similarly move right pointer to left so it also points to a alphanumeric character...
        while(left < right && !((s.charAt(right) >= 'a' && s.charAt(right) <= 'z') || (s.charAt(right) >= '0' && s.charAt(right) <= '9'))){
            right--;
        }
        // Check if both the characters are same...
        // If it is not equal then the string is not a valid palindrome, hence return false...
        if(s.charAt(left) != s.charAt(right)){
            return false;
        }
        // If same, then continue to next iteration and move both pointers to point to next alphanumeric character till left < right...
        left++;
        right--;
    }
    // After loop finishes, the string is said to be palindrome, hence return true...
    return true;
};


