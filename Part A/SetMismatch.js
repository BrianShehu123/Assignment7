/*
Using cyclic sort to sort the array and then check if the number should be on the right index, if it's not, we have found the missing number.
We push both nums[j] and j + 1 to the array and return the array.
*/

// Cyclic Sort Algorithm
function findErrorNums(nums) {
    // Validate input
    if (!nums)
        return null;

    let i = 0;
    let mismatch = [];

    // Perform cyclic sort
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex])
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        else
            i++;
    }

    // Find the mismatched numbers
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1)
            mismatch.push(nums[j], j + 1);
    }

    return mismatch;
}

// Test Cases
const nums1 = [1, 2, 2, 4];
console.log(findErrorNums(nums1)); // Output: [2, 3]

const nums2 = [1, 1];
console.log(findErrorNums(nums2)); // Output: [1, 2]
