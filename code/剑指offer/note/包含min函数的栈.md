```js
let stack = [], minStack = [];
function push(node) {
  // write code here
  stack.push(node);
  if (node < minStack[minStack.length - 1]) {
    minStack.push(node);
  } else {
    minStack.push(minStack[minStack.length - 1]);
  }

}
function pop() {
  // write code here
  if (stack.length === 0 || minStack.length === 0) return;
  stack.pop();
  minStack.pop();
}
function top() {
  // write code here
  if (stack.length === 0 || minStack.length === 0) return;
  return stack[stack.length - 1];
}
function min() {
  // write code here
  if (stack.length === 0 || minStack.length === 0) return;
  return minStack[minStack.length - 1];
}
```