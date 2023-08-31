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

