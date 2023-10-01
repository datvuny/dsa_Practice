////    NUMBER OF 1 BITS    ////
/*
Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
Note:
Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
Example 1:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
*/

const hammingWeight = (n)=> {
    let total = 0
    while (n>0){
        if (n%2 == 1) total+=1
        n >>>= 1
    }
    return total
};


////    COUNTING BITS   ////
/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/

const countBits = (n) => {
    arr = []
        for(let i=0;i<=n;i++){
            arr.push(i.toString(2).split("1").length-1)
        }   
        return arr
};


////    REVERSE BITS       /////
/*
190. Reverse Bits
Easy
4.7K
1.2K
Companies
Reverse bits of a given 32 bits unsigned integer.
Note:
Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
Example 1:
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
Example 2:
Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
*/
/*
 Initialize result to 0; this will store the reversed integer.

Loop 32 times because you are working with 32 bits.

In each iteration:

Left-shift result by 1, effectively making space for the next bit to be added.
Use bitwise AND (&) with n to get the least significant bit of n. This bit will be added to result.
Right-shift n by 1 to prepare for the next iteration.
Finally, return result after converting it to an unsigned 32-bit integer using >>> 0.
  */
const reverseBits = (n) => {
    let result = 0
    for (let i = 0; i<32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result >>> 0
};

/////       MISSING NUMBERS     /////
/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
*/

const missingNumber = (nums)=> {
  const n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
};