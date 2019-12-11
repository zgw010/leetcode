/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (60.56%)
 * Likes:    646
 * Dislikes: 941
 * Total Accepted:    258.9K
 * Total Submissions: 427.6K
 * Testcase Example:  '1'
 *
 * Write a program that outputs the string representation of numbers from 1 to
 * n.
 * 
 * But for multiples of three it should output “Fizz” instead of the number and
 * for the multiples of five output “Buzz”. For numbers which are multiples of
 * both three and five output “FizzBuzz”.
 * 
 * Example:
 * 
 * n = 15,
 * 
 * Return:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    let tmp = '';
    res[i] = i + 1;
    if (res[i] % 3 === 0) tmp += 'Fizz';
    if (res[i] % 5 === 0) tmp += 'Buzz';
    if (tmp) res[i] = tmp;
    else res[i] = '' + res[i];
  }
  return res;
};
// @lc code=end

