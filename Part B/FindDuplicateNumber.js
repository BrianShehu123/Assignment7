// Cyclic Sort Algorithm
function findDuplicatesCyclicSort(nums) {
    if (!nums) {
      return null;
    }
  
    let i = 0;
    const duplicates = [];
  
    // Cyclic Sort
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        i++;
      }
    }
  
    // Find Duplicates
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== j + 1) {
        duplicates.push(nums[j]);
      }
    }
  
    return duplicates;
  }
  
  // Fast/Slow Pointer Algorithm
  function findDuplicatesFastSlowPointer(nums) {
    if (!nums) {
      return null;
    }
  
    const duplicates = [];
  
    let slow = nums[0];
    let fast = nums[nums[0]];
  
    // Finding Cycle
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
    }
  
    // Finding Duplicate Number
    fast = 0;
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    duplicates.push(slow); // Adding the duplicate to the array
  
    return duplicates;
  }
  
  // Testing
  describe("findDuplicatesCyclicSort", () => {
    test("returns an empty array when given [1]", () => {
      expect(findDuplicatesCyclicSort([1])).toEqual([]);
    });
  
    test("returns [2, 3] when given [1, 2, 3, 3, 4, 5, 6, 6]", () => {
      expect(findDuplicatesCyclicSort([1, 2, 3, 3, 4, 5, 6, 6])).toEqual([3, 6]);
    });
  
  });
  
  describe("findDuplicatesFastSlowPointer", () => {
    test("returns an empty array when given [1]", () => {
      expect(findDuplicatesFastSlowPointer([1])).toEqual([]);
    });
  
    test("returns [3, 6] when given [1, 2, 3, 3, 4, 5, 6, 6]", () => {
      expect(findDuplicatesFastSlowPointer([1, 2, 3, 3, 4, 5, 6, 6])).toEqual([3, 6]);
    });
  
   
  });
  