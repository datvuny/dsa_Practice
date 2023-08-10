//      VALID PARENTHESIS       //

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

var isValid = function(s) {
    // Initialize stack to store the closing brackets expected...
    let stack = [];
    // Traverse each charater in input string...
    for (let idx = 0; idx < s.length; idx++) {
        // If open parentheses are present, push it to stack...
        if (s[idx] == '{') {
            stack.push('}');
        } else if (s[idx] == '[') {
            stack.push(']');
        } else if (s[idx] == '(') {
            stack.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (stack.pop() !== s[idx]) {
            return false;
        }
    }
    return !stack.length;
};


/**

const isValid = (s)=> {
    
    // check if length is an odd number. if it is, return false
    // if there is an odd number, it means that at least one bracket is missing a pair
    if (s.length % 2 === 1) return false
    
    // if the first element is a closing bracket, it doesn't matter what follows
    // it will never have a pair
    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
    
    // same goes for last element, we are just dealing with opening bracket
    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
    
    
    let stack = []
    
    for(let i=0; i<s.length; i++) {
        // if it's an opening bracket, push into stack
        // else, assume it's closing bracket and check if it matches anything
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i])
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }
        
    }
    return stack.length === 0
    
};
 */