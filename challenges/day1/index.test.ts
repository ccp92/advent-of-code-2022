import highestCalories, { convertFileToInput } from ".";

describe("Day 1", () => {
  describe("Part 1", () => {
    it("should return a sum of numbers when only one elf", () => {
      const input = [[1, 2, 3, 4]];
      const result = highestCalories(input);
      expect(result).toBe(10);
    });

    it("should return the elf with the highest calories when 2 are provided", () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const result = highestCalories(input);
      expect(result).toBe(15);
    });

    it("should convert the text from a file to an array", () => {
      const input = convertFileToInput(__dirname + "/testInput.txt");
      expect(input).toStrictEqual([
        [5686, 2211, 1513, 7036, 5196, 10274, 2967, 2551],
        [5942, 5827, 2514, 4024],
        [9857, 13173, 13071, 17540],
      ]);
    });

    it("should return the highest calories from the file", () => {
      const input = convertFileToInput(__dirname + "/challengeInput.txt");
      const result = highestCalories(input);
      expect(result).toBe(66719);
    });
  });

  describe("Part 2", () => {
    it("should return the sum of the top 3 elves", () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 1, 1],
      ];
      const result = highestCalories(input, true);
      expect(result).toBe(45);
    });

    it("should return the answer from the challengeInput file", () => {
      const input = convertFileToInput(__dirname + "/challengeInput.txt");
      const result = highestCalories(input, true);
      expect(result).toBe(198551);
    });
  });
});
