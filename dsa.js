// ARRAYS & HASHING

/* 
Contains Duplicates

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true
Input: nums = [1,2,3,4]
Output: false

var containsDuplicate = function(nums) {
    
};


const containsDuplicate = (nums) => {
    if (nums.length <= 1) return false
    let sortedNum = nums.sort()
    for (let i = 0; i<sortedNum.length -1; i++){
        if (sortedNum[i] == sortedNum[i+1]) return true
    }
    return false
};
*/
const containsDuplicate = (nums) => {
    if (nums.length <= 1) return false
    let map = new Map();
    for (let i = 0; i<nums.length; i++){
        if(map.has(nums[i])) return true
        else map.set(nums[i], 1)
    }
    return false
};


//  ANAGRAMS

// const isAnagram = (s, t)=> {
//     if (s.split('').sort().join('')===t.split('').sort().join(''))return true
//     return false
// };
const isAnagram = (s, t)=> {
    if (s.length !== t.length) return false;
    
    let letters = {};

    for (let i = 0; i < s.length; i++) {
         letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
         letters[t[i]] = letters[t[i]] ? letters[t[i]] - 1 : -1;
        console.log(letters)
    }
    
    for (let letter in letters) {

        if (letters[letter] !== 0) {
            return false;
        }
    }
    return true;
};

