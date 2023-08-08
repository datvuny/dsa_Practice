//    ARRAYS & HASHING    //
///////////////////////////

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

//  GROUP ANAGRAMS
/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

const groupAnagrams = (strs) => {
    let map = new Map()
    for (i=0; i<strs.length; i++){
        let sortedString = strs[i].split('').sort().join('')
        console.log(sortedString)
        if (!map.has(sortedString)){
            map.set(sortedString, [strs[i]])
        } else map.get(sortedString).push(strs[i])
    }
    return Array.from(map.values())
};


//  TOP K REQUENT ELEMENTS
/*
Given an integer array nums and an integer k, return the k most
frequent elements. You may return the answer in any order.
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

const topKFrequent = (nums, k) => {
    let map = new Map()
    for(let num of nums){
      if (map.has(num)){
        map.set(num, map.get(num)+1)
      } else {map.set(num, 1)
      }
    }
    const sortedNumbers = Array.from(map.keys()).sort((a,b) => map.get(b) - map.get(a))
    return sortedNumbers.slice(0,k)
};

// PRODUCT OF ARRAY EXCEPT SELF
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

function productExceptSelf(nums) {
    const n = nums.length;
    
    // Initialize prefix and suffix product arrays
    const prefixProducts = new Array(n).fill(1);
    const suffixProducts = new Array(n).fill(1);
    
    // Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        prefixProducts[i] = prefix;
        prefix *= nums[i];
    }
    
    // Calculate suffix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        suffixProducts[i] = suffix;
        suffix *= nums[i];
    }
    
    // Calculate answer using prefix and suffix products
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProducts[i] * suffixProducts[i];
    }
    
    return answer;
}
*/

const productExceptSelf = (nums) => {
    let result = []
    let prefix = []
    let suffix = []

    for (let i=0; i<nums.length; i++){
        if (i==0){
            prefix[i] = 1
        } else {
            prefix[i] = nums[i-1] * prefix[i-1]
        }
    }
    for (let i=nums.length - 1; i>=0; i--){
        if (i==nums.length -1){
            suffix[i] = 1
        } else {
            suffix[i] = nums[i+1] * suffix[i+1]
        }
    }
    for (let i=0; i<nums.length; i++){
        result[i] = prefix[i] * suffix[i]
    }
    return result
};


// LONGEST CONSECUTIVE SEQUENCE
/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

const longestConsecutive = (nums) => {
    if (nums.length == 0) return 0
    if (nums.length == 1) return 1
    let sortedNum = nums.sort((a,b) => a -b)
    let maxCount = 1
    let count = 1
    for (let i =1; i<sortedNum.length; i++){
        if (sortedNum[i-1] != sortedNum[i]){
           if (sortedNum[i-1]+1 == sortedNum[i]) {
            count++
            maxCount = Math.max(maxCount, count)
            }  
            else { count = 1}
        }
        
    }
    return maxCount
};
*/

const longestConsecutive = (nums) => {
    if (nums.length === 0) return 0;

    // Create a set to store unique numbers
    const numSet = new Set(nums);

    let maxCount = 0;

    for (const num of numSet) {
        // Check if the current number is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentCount = 1;

            // Find the length of the consecutive sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentCount++;
            }

            maxCount = Math.max(maxCount, currentCount);
        }
    }

    return maxCount;
};
