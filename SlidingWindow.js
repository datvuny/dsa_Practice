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

//      LONGEST REPEATING CHARACTER W/ REPLACEMENT    //
//////////////////////////////////////////////////////

/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
*/

const characterReplacement = (s, k) => {
    const hash = new Map();
    let result = 0;
    let maxCount = 0; // Keep track of the maximum occurrence of a character in a window
    let left = 0;

    for (let r = 0; r < s.length; r++) {
        if (hash.has(s[r])) {
            hash.set(s[r], hash.get(s[r]) + 1); // Increment the count of the character in the window
        } else {
            hash.set(s[r], 1);
        }
        
        maxCount = Math.max(maxCount, hash.get(s[r])); // Update maxCount with the highest character count
        
        // Check if the number of characters to be replaced (length of current window - maxCount) exceeds k
        // If it does, then we need to shrink the window by moving the left pointer
        while ((r - left + 1) - maxCount > k) {
            hash.set(s[left], hash.get(s[left]) - 1); // Decrement the count of the character as we move the window
            left += 1;
            maxCount = Math.max(...hash.values()); // Recalculate maxCount after removing one character from the window
        }
        
        result = Math.max(result, r - left + 1); // Update the maximum length of the substring with the same letter
    }
    
    return result;
};


//      Min WINDOW SUBSTRING        //
/////////////////////////////////////

/*
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/

const minWindow = (s, t) => {
    let left = 0;
    let right = 0;
    let charCount = {}; // to store character frequencies in t
    let requiredChars = t.length; // count of characters in t

    // Count characters in t
    for (const char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let minLength = Infinity;
    let minSubstring = '';

    while (right < s.length) {
        if (charCount[s[right]] > 0) {
            requiredChars--; // Decrement requiredChars if a needed character is found
        }

        charCount[s[right]] = (charCount[s[right]] || 0) - 1;
        right++;

        // Check if all required characters are present
        while (requiredChars === 0) {
            if (right - left < minLength) {
                minLength = right - left;
                minSubstring = s.slice(left, right);
            }

            charCount[s[left]]++;
            if (charCount[s[left]] > 0) {
                requiredChars++; // Increment requiredChars if a required character is removed
            }
            left++;
        }
    }

    return minSubstring; 
};