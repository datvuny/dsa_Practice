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

//      IS SAME TREE        //
/////////////////////////////
/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true
*/
const isSameTree = (p, q) => {
    if (!p && !q) {
        return true; // Both trees are empty
    }
    
    if (!p || !q) {
        return false; // One tree is empty while the other isn't
    }
    
    if (p.val !== q.val) {
        return false; // Nodes have different values
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//      IS SUBTREE OF ANOTHER TREE      //
/////////////////////////////////////////
/*
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
*/

// DFS Version:
const isSubtree = (root, subRoot) => {
    const areEqual = (node1, node2) => {
      if (!node1 || !node2) return !node1 && !node2;
      if (node1.val !== node2.val) return false;
      return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
    }
    const dfs = (node) => {
      if (!node) return false;
      if (areEqual(node, subRoot)) return true;
      return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
  };
 
 // BFS version:
  const isSubtree2 = (root, subRoot) => {
    const areEqual = (tree, subTree) => {
      const queue = [[tree, subTree]];
      while (queue.length) {
        const [node1, node2] = queue.pop();
        if (!node1 && !node2) continue;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        queue.push([node1.right, node2.right], [node1.left, node2.left]);
      }
      return true;
    }
    const queue = [root];
    while (queue.length) {
      const node = queue.pop();
      if (!node) continue;
      if (areEqual(node, subRoot)) return true;
      queue.push(node.right, node.left);
    }
    return false;
  };

  //RECURSIVE
  const isSubtree1 = (root, subRoot)=> {
    if (!root) {
        return false;
    }

    if (isSameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/*
 * Helper function to check if two trees are the same.
 */
function isSameTree (p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//    LOWEST COMMON ANCESTOR OF A BST   //
/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
*/

const lowestCommonAncestor = (root, p, q) => {
  if (!root) {
      return null; // Base case: empty tree or reached a leaf node
  }

  if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q); // Both nodes are in the left subtree
  } else if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q); // Both nodes are in the right subtree
  } else {
      return root; // Found the split point, this is the LCA
  }
};
