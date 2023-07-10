// Cyclic Sort Algorithm
function missingNumber(nums) {
    // Special case: empty array
    if (nums.length === 0) {
      return 0;
    }
  
    // Special case: array of length 1
    if (nums.length === 1) {
      return nums[0] === 0 ? 1 : 0;
    }
  
    // Perform cyclic sort
    let i = 0;
    while (i < nums.length) {
      const correctIndex = nums[i];
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        i++;
      }
    }
  
    // Find the missing number
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== j) {
        return j;
      }
    }
  
    // If all numbers are in place, the missing number is the length of the array
    return nums.length;
  }
  
  // Test cases
  describe("Missing Number using Cyclic Sort Algorithm", () => {
    test("Missing number in [3, 0, 1] should be 2", () => {
      expect(missingNumber([3, 0, 1])).toEqual(2);
    });
  
    test("Missing number in [9, 6, 4, 2, 3, 5, 7, 0, 1] should be 8", () => {
      expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
    });
  
    test("Missing number in [0, 1, 2, 3, 4, 5] should be 6", () => {
      expect(missingNumber([0, 1, 2, 3, 4, 5])).toEqual(6);
    });
  });
  