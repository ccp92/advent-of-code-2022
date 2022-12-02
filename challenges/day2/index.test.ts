import calculatedScore, { convertFileToInput, updatedCalculatedScore } from ".";

describe("Day 2", () => {
  describe("Part 1", () => {
    it("should return a score for rock, paper or scissors", () => {
      const input = [
        ["A", "Y"],
        ["B", "X"],
        ["C", "Z"],
      ];
      const result = calculatedScore(input);
      expect(result).toBe(15);
    });
    it("Should return an array of arrays", () => {
      const input = convertFileToInput(__dirname + "/testInput.txt");
      expect(input).toStrictEqual([
        ["A", "Y"],
        ["B", "Y"],
        ["B", "Z"],
      ]);
    });

    it("should return the challenge score", () => {
      const input = convertFileToInput(__dirname + "/challengeInput.txt");
      const result = calculatedScore(input);
      expect(result).toBe(13565);
    });
  });
  describe("Part 2", () => {
    it("should return a score for rock, paper or scissors", () => {
      const input = [
        ["A", "Y"],
        ["B", "X"],
        ["C", "Z"],
      ];
      const result = updatedCalculatedScore(input);
      expect(result).toBe(12);
    });

    it("should return the challenge score", () => {
      const input = convertFileToInput(__dirname + "/challengeInput.txt");
      const result = updatedCalculatedScore(input);
      expect(result).toBe(12424);
    });
  });
});
