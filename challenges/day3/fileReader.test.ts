import convertFileToInput from "./fileReader";

describe("File Reader", () => {
  it("should read a file", async () => {
    const result = convertFileToInput(__dirname + "/testInput.txt");
    expect(result).toStrictEqual([
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw",
    ]);
  });
});
