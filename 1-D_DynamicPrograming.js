///     CLIMBING STAIRS     ///
/* 
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
const climbStairs = (n)=> {
    if (n <= 2) {
        return n; // For n <= 2, there are n distinct ways
      }
    
      let prev1 = 1; // Represents the number of ways for n - 1
      let prev2 = 2; // Represents the number of ways for n - 2
    
      for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2; // Number of ways for n
        prev1 = prev2; // Update prev1 for the next iteration
        prev2 = current; // Update prev2 for the next iteration
      }
    
      return prev2; // The result is the number of ways for n
};    

//////      House Robber    //////
/*
You are a professional robber planning to rob houses along a street.   
Each house has a certain amount of money stashed, the only constraint 
stopping you from robbing each of them is that adjacent houses have 
security systems connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each 
house, return the maximum amount of money you can rob tonight without alerting the police.
Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/