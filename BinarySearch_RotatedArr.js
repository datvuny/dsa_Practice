//      FIND Min IN ROTATED SORTED ARRAY    //
/////////////////////////////////////////////

/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
*/

/* 
const findMin = (nums) => {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const m = ~~((l + r) / 2);
      if (nums[m] > nums[r]) l = m + 1;
      else r = m;
    }
    return nums[l];
  };
*/

const findMin = (nums) => {
    if (nums.length === 1) return nums[0]
    let result = nums[0],
        left = 0,
        right = nums.length - 1

    while (left <= right){
        if (nums[left] < nums[right]) {
            result = Math.min(result, nums[left])
        }

        let middle = Math.floor((left + right) /2)
        result = Math.min(result, nums[middle])

        if (nums[middle] >= nums[left]){
            left = middle + 1
        } else right = middle - 1
    }   
    return result
};


//      SEARCH TARGET IN ROTATED SORTED ARR     //

/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity. 

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
 */

const search = (nums, target) => {
    if (nums[0] === target) return 0
    let l = 0,
        r = nums.length -1;

    while (l <= r) {
        let middle = Math.floor(((l + r)/2));
        if (nums[middle] === target) return middle;
        
        if (nums[l] <= nums[middle]) {
            if (target >= nums[l] && target < nums[middle]){
                r = middle - 1
            }   else {
                l = middle + 1
            }
    }   else {
        if (target > nums[middle] && target <= nums[r]) {
            l = middle +1
        } else {
            r = middle - 1
        }
    }
    }
    return -1
};


