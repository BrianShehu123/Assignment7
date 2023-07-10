// Cyclic Sort Algorithm
function findDuplicate(nums) {
    if (!nums) {
      return null;
    }
  
    let i = 0;
  
    // Perform cyclic sort
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        i++;
      }
    }
  
    // Find the duplicate number
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== j + 1) {
        return nums[j];
      }
    }
  
    return null;
  }
  
  // Testing
  describe("findDuplicate", () => {
    test("should return the duplicate number in the array", () => {
      expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2);
    });
  
    test("should return null when there is no duplicate", () => {
      expect(findDuplicate([1, 2, 3, 4, 5])).toBeNull();
    });
  });
  