// Q1 : Given an array arr[] of size N, you have to reverse the array using Stack

// class Stack {
//   constructor() {
//     this.array = [];
//     this.reverse = [];
//   }
//   reversingArray(array) {
//     for (let i = 0; i < array.length; i++) {
//       this.array.push(array[i]);
//     }
//     for (let i = 0; i < array.length; i++) {
//       this.reverse.push(pull(array[array.length - 1]));
//     }
//   }
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(reversingArray(array));

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

// Q5 :  Create a function that takes a LinkedList and deletes the middle node in it and returns it
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
