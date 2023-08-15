//      INVERT BINARY TREES     //
/*
Given the root of a binary tree, invert the tree, and return its root.
Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/
/*
const invertTree = (root) => {
    if (!root) return null;
    
    //swap the left and the right subtrees
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root
};
*/

// ES6
const invertTree = (root) => {
  if (root === null) {
    return null;
  }
  
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  
  return root;
};
