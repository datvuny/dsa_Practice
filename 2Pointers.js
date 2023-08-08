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


//     3 SUM   //
////////////////

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

const threeSum = (nums) => {
    let result = []
    nums = nums.sort((a,b)=>a-b)
    
    for (let i = 0;i<nums.length;i++){
        if (i>0 && nums[i] == nums[i-1]) continue
        let left = i+1
        let right = nums.length - 1
        
        while(left<right){
            const sum = nums[i] + nums [left] +nums[right]
            if (sum==0){
                result.push([nums[i], nums [left], nums[right]])
                left++
                while(nums[left]==nums[left-1] && left<right){
                    left++
                }
                
            } else if (sum<0){
                left++
            } else right --
        }
    }
    return result
};

//      CONTAINER W/MOST WATER  //
/////////////////////////////////
/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

const maxArea = (height) => {
    let maxWater = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        let width = right - left
        let minHeight = Math.min(height[left], height[right])
        let currentWater = width * minHeight
        maxWater = Math.max(maxWater, currentWater)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxWater
};
