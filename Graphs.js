////////      NUMBER OF ISLANDS    //////////////

/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

// ---Depth-First Search (DFS)---
const numIslands = (grid) => {
    if (!grid || grid.length < 1) return 0

    const rows = grid.length
    const cols = grid[0].length
    let islands = 0

    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0'){
            return
        }
        grid[row][col] = '0' //mark the current cell as visited

        //explore adjacent cells in all 4 directions
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col +1)
        dfs(row, col -1)
    }

    for(let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            if (grid[i][j] === '1') {
                islands++
                dfs(i, j)
            }
        }
    }
    return islands
};

/*
---Breadth-First Search (BFS)---

function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    function bfs(row, col) {
        const queue = [];
        queue.push([row, col]);
        grid[row][col] = '0';

        while (queue.length > 0) {
            const [r, c] = queue.shift();

            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (const [dr, dc] of directions) {
                const newRow = r + dr;
                const newCol = c + dc;

                if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol] === '1') {
                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = '0'; // Mark the current cell as visited
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islands++;
                bfs(i, j);
            }
        }
    }

    return islands;
}

 */

//////      CLONE GRAPH     //////
/*
Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
class Node {
    public int val;
    public List<Node> neighbors;
}
Test case format:
For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
Example 1:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
*/
//---Depth-First Search (DFS)--- 
const cloneGraph = (node) =>{
    if (!node) {
        return null
    }

    const visited = new Map()

    const dfs = originalNode => {
        if (visited.has(originalNode)) {
            return visited.get(originalNode)
        }

        const clonedNode = new Node(originalNode.val)
        visited.set(originalNode, clonedNode)

        for (let neighbor of originalNode.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor))
        }
        return clonedNode
    }
    return dfs(node)
};
/* 
---Breadth-First Search (BFS)--- 
const cloneGraph = (node) => {
    if (!node) return null

    const visited = new Map()
    const queue = [node]

    const clonedNode = new Node(node.val)
    visited.set(node, clonedNode)

    while(queue.length >0) {
        const originalNode = queue.shift()

        for (let neighbor of originalNode.neighbors){
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor)
            }
            visited.get(originalNode).neighbors.push(visited.get(neighbor))
        }
    }
    return clonedNode
}
*/


//////      Pacific Atlantic Water Flow     /////
/*
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
Example 1:
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
*/

const pacificAtlantic = (heights) => {
    if (!heights || heights <1) return []

    const rows = heights.length;
    const cols = heights[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const canFlowToPacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    const canFlowToAtlantic = Array.from({ length: rows }, () => Array(cols).fill(false));
    
    const dfs = (row, col, ocean) => {
        ocean[row][col] = true;
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                !ocean[newRow][newCol] &&
                heights[newRow][newCol] >= heights[row][col]
            ) {
                dfs(newRow, newCol, ocean);
            }
        }
    };
    
    for (let i = 0; i < rows; i++) {
        dfs(i, 0, canFlowToPacific);
        dfs(i, cols - 1, canFlowToAtlantic);
    }
    
    for (let j = 0; j < cols; j++) {
        dfs(0, j, canFlowToPacific);
        dfs(rows - 1, j, canFlowToAtlantic);
    }
    
    const result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (canFlowToPacific[i][j] && canFlowToAtlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    
    return result;
};