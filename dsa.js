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

// TWO SUM
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// Nested for-loops w./ time complexity: O(n^2)
// const twoSum = (nums, target) => {
//    for (let i =0; i<nums.length;i++){
//        for (let j=i+1; j<nums.length;j++){
//            if (nums[i]+nums[j]== target) return [i,j]
//        }
//    }
//    return []
// };

// // time complexity: O(n) but hash does not count duplicates ;(
// const twoSum = (nums, target) => {
//     const seen = new Set()
//     for (let i=0; i<nums.length;i++){
//         let complement = target - nums[i]
//         if (seen.has(complement)){
//             return [[...seen].indexOf(complement), i]
//         }
//         seen.add(nums[i])
//     }
//     return []
// }

const twoSum = (nums, target) =>{
    const hashMap = new Map;
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i]
        }
        hashMap.set(nums[i], i);
    }
}

