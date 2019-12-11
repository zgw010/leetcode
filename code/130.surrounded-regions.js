/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 *
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (24.72%)
 * Likes:    1048
 * Dislikes: 519
 * Total Accepted:    174.4K
 * Total Submissions: 705.5K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions
 * surrounded by 'X'.
 * 
 * A region is captured by flipping all 'O's into 'X's in that surrounded
 * region.
 * 
 * Example:
 * 
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * After running your function, the board should be:
 * 
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * Explanation:
 * 
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on
 * the border of the board are not flipped to 'X'. Any 'O' that is not on the
 * border and it is not connected to an 'O' on the border will be flipped to
 * 'X'. Two cells are connected if they are adjacent cells connected
 * horizontally or vertically.
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
  const m = board.length;
  if (m === 0) return;
  const n = board[0].length;
  const dfs = (i, j) => {
    if (i < 0 || i === m || j < 0 || j === n) return;
    if (board[i][j] === 'X' || board[i][j] === 'T') return;
    if (board[i][j] === 'O') board[i][j] = 'T';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (i === 0 || j === 0 || i === m - 1 | j === n - 1) dfs(i, j);
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (board[i][j] !== 'T') board[i][j] = 'X'; else board[i][j] = 'O'
};
// @lc code=end
