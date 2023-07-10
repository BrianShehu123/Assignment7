// Cyclic Sort Algorithm
/*
    Pseudocode:
    1. Initialize the pointer i as 0.
    2. Iterate through the array:
        - Get the correct index for the current number (nums[i] - 1).
        - If the current number is not in its correct position, swap it with the number at its correct index.
        - Otherwise, move to the next number by incrementing i.
    3. Iterate through the sorted array and return the first number that is not in its correct position.
*/

function findDuplicateUsingCyclicSort(nums) {
    if (!nums)
      return null;
  
    let i = 0;
  
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
      if (nums[i] !== nums[correctIndex])
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      else
        i++;
    }
  
    for (let j = 0; j < nums.length; j++)
      if (nums[j] !== j + 1)
        return nums[j];
  
    return null;
  }
  
  // Fast/Slow Pointer Algorithm (Floyd's Tortoise and Hare Algorithm)
  /*
      Pseudocode:
      1. Initialize two pointers, slow and fast, to the first element of the array.
      2. Move slow one step at a time and fast two steps at a time until they meet.
      3. Set the fast pointer back to the first element.
      4. Move both pointers one step at a time until they meet again.
      5. The meeting point of the two pointers is the duplicate number.
  */
  
  function findDuplicateUsingFastSlowPointers(nums) {
    if (!nums)
      return null;
  
    let slow = nums[0];
    let fast = nums[0];
  
    // Move slow and fast pointers until they meet
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    // Set the fast pointer back to the first element
    fast = nums[0];
  
    // Move both pointers until they meet again
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    return slow;
  }
  
  // Test Cases
  console.log(findDuplicateUsingCyclicSort([1, 3, 4, 2, 2])); // Output: 2
  console.log(findDuplicateUsingFastSlowPointers([1, 3, 4, 2, 2])); // Output: 2
  