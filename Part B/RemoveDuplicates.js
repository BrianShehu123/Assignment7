
/*Pseudocode:
function removeDuplicates(nums):
    i = 0
    for j = 1 to length(nums) - 1:
        if nums[i] != nums[j]:
            i = i + 1
            nums[i] = nums[j]
    return i + 1
*/

/**
 * Removes duplicates from a sorted array in-place such that each element appears only once.
 * Returns the new length of the array.
 *
 * @param {number[]} nums - The sorted array.
 * @returns {number} The length of the resulting array after removing duplicates.
 */
function removeDuplicates(nums) {
  let i = 0; // Initialize a pointer i to keep track of the position to replace the duplicate elements

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) { // If the current element is not equal to the previous element
      i++; // Move the pointer i to the next position
      nums[i] = nums[j]; // Replace the element at position i with the current element
    }
  }

  return i + 1; // Return the length of the resulting array after removing duplicates
}

// Test Cases
const nums1 = [1, 1, 2];
console.log(`Original Array: [${nums1}]`);
const length1 = removeDuplicates(nums1);
console.log(`After Removing Duplicates: [${nums1.slice(0, length1)}]`); // Expected: [1, 2]
console.log(`Length: ${length1}`); // Expected: 2

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(`Original Array: [${nums2}]`);
const length2 = removeDuplicates(nums2);
console.log(`After Removing Duplicates: [${nums2.slice(0, length2)}]`); // Expected: [0, 1, 2, 3, 4]
console.log(`Length: ${length2}`); // Expected: 5
