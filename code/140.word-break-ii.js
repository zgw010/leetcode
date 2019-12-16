/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 *
 * https://leetcode.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (28.98%)
 * Likes:    1332
 * Dislikes: 295
 * Total Accepted:    188.3K
 * Total Submissions: 649.2K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, add spaces in s to construct a sentence where each word is
 * a valid dictionary word. Return all such possible sentences.
 * 
 * Note:
 * 
 * 
 * The same word in the dictionary may be reused multiple times in the
 * segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * Output:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * Output:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output:
 * []
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const q = function (s, wordDict) {
  const inWordDict = word => {
    for (const w of wordDict) {
      if (word === w) return true;
    }
    return false;

  }
  const res = [], slen = s.length;
  if (!slen) return [];
  const h = new Array(slen).fill(0).map(() => new Array());
  let temp = [];
  const d = end => {
    if (end <= 0 && temp.length > 0) {
      res.push(temp.join(' '));
      h.push([...temp]);
      return;
    }
    for (let i = end - 1; i >= 0; i--) {
      if (inWordDict(s.slice(i, end))) {
        temp.unshift(s.slice(i, end))
        d(i);
        temp.shift();
      }
    }
  }
  d(slen);
  console.log(h);
  return res;
};
const wordBreak = function (s, wordDict) {
  const hashMap = {};
  const d = (s) => {
    console.log('==1', s, hashMap, hashMap[s]);
    if (hashMap[s]) return hashMap[s];
    const res = [];
    if (s.length === 0) return [''];
    for (const word of wordDict) {
      if (s.startsWith(word)) {
        console.log('==2', word);
        const subList = d(s.substring(word.length));
        // console.log('==3subList', subList);
        for (const sub of subList) {
          // console.log('==4', sub);
          console.log('=======', sub);
          res.push(word + (sub && " ") + sub);
        }
      }
    }
    hashMap[s] = res;
    return res;
  }
  d(s);
  console.log(hashMap);
};
// const wordBreak = function (s, wordDict) {
//   const hashMap = {};
//   const d = s => {
//     if (hashMap[s]) return hashMap[s];
//     if (s.length === 0) return [''];
//     const res = [];
//     for (const word of wordDict) if (s.startsWith(word)) for (const sub of d(s.substring(word.length))) res.push(word + (sub && " ") + sub);
//     hashMap[s] = res;
//     return res;
//   }
//   return d(s);
// };
// @lc code=end
