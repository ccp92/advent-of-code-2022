import backpackSorter, {
  compareCompartments,
  compartmentSplit,
  priorityValue,
} from ".";
import convertFileToInput from "./fileReader";

describe("Day 3", () => {
  it("can split a backpack into two compartments", () => {
    const result = compartmentSplit("vJrwpWtwJgWrhcsFMMfFFhFp");
    expect(result).toStrictEqual(["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
  });

  it("returns a matched letter", () => {
    const result = compareCompartments("vJrwpWtwJgWr", "hcsFMMfFFhFp");
    expect(result).toBe("p");
  });

  it("can determine the value of a letter", () => {
    const result = priorityValue("L");
    expect(result).toBe(38);
  });

  it("returns the priority of a single backpack", () => {
    const result = backpackSorter(["vJrwpWtwJgWrhcsFMMfFFhFp"]);
    expect(result).toBe(16);
  });

  it("returns the summed priority of multiple backbacks", () => {
    const input = convertFileToInput(__dirname + "/testInput.txt");
    const result = backpackSorter(input);
    expect(result).toBe(157);
  });

  it("returns the final result", () => {
    const input = convertFileToInput(__dirname + "/challengeInput.txt");
    const result = backpackSorter(input);
    expect(result).toBe(8233);
  });
});
