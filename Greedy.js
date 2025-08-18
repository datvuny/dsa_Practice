///     Maximum Subarray    ///
/*
Given an integer array nums, find the 
subarray with the largest sum, and return its sum.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

const maxSubArray = (nums)=> {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};


////        JUMP GAME       ////
/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

const canJump = (nums)=> {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false; // Cannot reach this position
        }

        maxReach = Math.max(maxReach, i + nums[i]);

        if (maxReach >= nums.length - 1) {
            return true; // Reached or can reach the last index
        }
    }

    return false;
};
