import fs from "fs";

export const convertFileToInput = (file: string) => {
  const string = fs.readFileSync(file, "utf8").toString();
  const array = string.split("\n");

  const allElves: number[][] = [];
  let individualElf: number[] = [];
  array.forEach((element) => {
    if (element.length > 0) {
      individualElf.push(parseInt(element));
    } else {
      allElves.push(individualElf);
      individualElf = [];
    }
  });

  return allElves;
};

const highestCalories = (elves: number[][]) => {
  let calorieSum: number[] = [];
  elves.forEach((elf) => {
    calorieSum.push(elf.reduce((a, b) => a + b, 0));
  });
  return Math.max(...calorieSum);
};

export default highestCalories;
