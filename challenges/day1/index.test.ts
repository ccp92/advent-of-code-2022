import highestCalories from ".";

describe("Day 1", () => {
  it("should return a sum of numbers when only one elf", () => {
    const input = [1, 2, 3, 4];
    const result = highestCalories(input);
    expect(result).toBe(10);
  });
});
