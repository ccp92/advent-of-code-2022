import fs from "fs";

export const convertFileToInput = (file: string) => {
  const string = fs.readFileSync(file, "utf8").toString();
  const array = string.split("\n");

  const allResults: string[][] = [];
  array.forEach((element) => {
    if (element !== "") {
      const result = element.split(" ");
      allResults.push(result);
    }
  });

  return allResults;
};

const calculatedScore = (results: string[][]) => {
  let score = 0;
  // Opponent throws
  // A = rock
  // B = paper
  // C = scissors

  // You throw
  // X = rock + 1
  // Y = paper + 2
  // Z = scissors + 3

  // Scores
  // 6 = win
  // 3 = draw
  // 0 = lose

  results.forEach((result) => {
    if (result[0] === "A" && result[1] === "X") {
      score += 1;
      score += 3;
    } else if (result[0] === "A" && result[1] === "Y") {
      score += 2;
      score += 6;
    } else if (result[0] === "A" && result[1] === "Z") {
      score += 3;
      score += 0;
    } else if (result[0] === "B" && result[1] === "X") {
      score += 1;
      score += 0;
    } else if (result[0] === "B" && result[1] === "Y") {
      score += 2;
      score += 3;
    } else if (result[0] === "B" && result[1] === "Z") {
      score += 3;
      score += 6;
    } else if (result[0] === "C" && result[1] === "X") {
      score += 1;
      score += 6;
    } else if (result[0] === "C" && result[1] === "Y") {
      score += 2;
      score += 0;
    } else if (result[0] === "C" && result[1] === "Z") {
      score += 3;
      score += 3;
    }
  });

  return score;
};

export default calculatedScore;
