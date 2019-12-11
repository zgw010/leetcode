/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (37.52%)
 * Likes:    1470
 * Dislikes: 3294
 * Total Accepted:    455.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const newNums1 = nums1.slice(0, m);
  const newNums2 = nums2.slice(0, n);
  if (newNums1.length === 0) {
    for (let p = 0; p < n; p++) {
      nums1[p] = newNums2[p];
    }
    return;
  }
  if (newNums2.length === 0) {
    for (let p = 0; p < m; p++) {
      nums1[p] = newNums1[p];
    }
    return;
  }
  const newNums = [];
  let i = 0, j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      newNums[i + j] = newNums1[i];
      ++i;
    } else {
      newNums[i + j] = newNums2[j];
      ++j;
    }
  }
  if (i !== m) for (let a = n + i; a < m + n; a++ , i++) newNums[a] = nums1[i];
  if (j !== n) for (let b = m + j; b < m + n; b++ , j++) newNums[b] = nums2[j];
  for (let c = 0; c < newNums.length; c++) nums1[c] = newNums[c];
};
// @lc code=end
