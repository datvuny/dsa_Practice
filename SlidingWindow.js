//      BEST TIME TO BUY SELL STOCK     //
/////////////////////////////////////////

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

// const maxProfit = (prices)=> {
//     let maxProf = 0;
//     let buy = prices[0]

//     for (let sell = 1; sell< prices.length; sell++){
//         let profit = prices[sell] - buy;
//         if (profit < 0) {
//             buy = prices[sell]
//         } else {
//             maxProf = Math.max(maxProf, profit)
//         }
//     }
//     return maxProf
// };

const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

  //    LONGEST SUBSTRING W/O REPEATING CHAR    //
  ///////////////////////////////////////////////
  /*
Given a string s, find the length of the longest 
substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
  */

const lengthOfLongestSubstring = s => {
    const set = new Set()
    let left = 0
    let maxSize = 0

    if(s.length<2)return s.length
    
    for(let i =0;i<s.length;i++){
        while(set.has(s[i])){
            set.delete(s[left])
            left++
        }
        set.add(s[i])
        maxSize = Math.max(maxSize, i-left+1)
    }
    return maxSize
};

