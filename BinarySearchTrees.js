//      INVERT BINARY TREES     //
/*
Given the root of a binary tree, invert the tree, and return its root.
Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/

// Recursion
function invertTree(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// DFS
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }

  return root;
}

// BFS
function invertTree(root) {
  const queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }

  return root;
}

//      MAX DEPTH OF BINARY TREE    //
////////////////////////////////////
/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3
*/
 // Recursive
 const maxDepth = (root) => {
    if (!root) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
};

// BFS
const maxDepth2 = (root) => {
    if (!root) {
        return 0;
    }
    
    const queue = [root];
    let depth = 0;
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        
        depth++;
    }
    
    return depth;
};

//DFS
const maxDepth3 = (root) => {
    if (!root) {
        return 0;
    }
    
    const stack = [{ node: root, depth: 1 }];
    let maxDepth = 0;
    
    while (stack.length > 0) {
        const { node, depth } = stack.pop();
        maxDepth = Math.max(maxDepth, depth);
        
        if (node.left) {
            stack.push({ node: node.left, depth: depth + 1 });
        }
        
        if (node.right) {
            stack.push({ node: node.right, depth: depth + 1 });
        }
    }
    
    return maxDepth;
};
