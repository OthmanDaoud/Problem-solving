// Q1 : Given an array arr[] of size N, you have to reverse the array using Stack
function reverseArray(arr) {
  let stack = [];
  // Push all elements to the stack
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  // Pop all elements from the stack and put them back in the array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
  return arr;
}

// Example usage
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]

// Q2 : Implementing a Queue Data Structure using Two Stacks

// Q3 : Create a function to find the sum of an array of integers using recursion .

function sumRecursion(array, n) {
  if (n == 0) {
    return 0;
  } else {
    return array[n - 1] + sumRecursion(array, n - 1);
  }
}

let array2 = [1, 2, 3, 4, 5];
console.log(sumRecursion(array2, array2.length));

// Q4 : Create a function that takes a LinkedList and reverses it
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head = reverseLinkedList(head);
while (head !== null) {
  console.log(head.value);
  head = head.next;
}
// Output: 3 2 1

// Q5 :  Create a function that takes a LinkedList and deletes the middle node in it and returns it
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
