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

