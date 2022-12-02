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

export const updatedCalculatedScore = (results: string[][]) => {
  let score = 0;

  // Opponent throws
  // A = rock
  // B = paper
  // C = scissors

  // You throw
  // rock = 1
  // paper = 2
  // scissors = 3

  // Result is
  // X = lose
  // Y = draw
  // Z = win

  // Scores
  // 6 = win
  // 3 = draw
  // 0 = lose

  results.forEach((result) => {
    if (result[0] === "A" && result[1] === "X") {
      // They throw rock, you lose, you throw scissors
      score += 0;
      score += 3;
    } else if (result[0] === "A" && result[1] === "Y") {
      // They throw rock, you draw, you throw rock
      score += 3;
      score += 1;
    } else if (result[0] === "A" && result[1] === "Z") {
      // They throw rock, you win, you throw paper
      score += 6;
      score += 2;
    } else if (result[0] === "B" && result[1] === "X") {
      // They throw paper, you lose, you throw rock
      score += 0;
      score += 1;
    } else if (result[0] === "B" && result[1] === "Y") {
      // They throw paper, you draw, you throw paper
      score += 3;
      score += 2;
    } else if (result[0] === "B" && result[1] === "Z") {
      // They throw paper, you win, you throw scissors
      score += 6;
      score += 3;
    } else if (result[0] === "C" && result[1] === "X") {
      // They throw scissors, you lose, you throw paper
      score += 0;
      score += 2;
    } else if (result[0] === "C" && result[1] === "Y") {
      // They throw scissors, you draw, you throw scissors
      score += 3;
      score += 3;
    } else if (result[0] === "C" && result[1] === "Z") {
      // They throw scissors, you win, you throw rock
      score += 6;
      score += 1;
    }
  });

  return score;
};

export default calculatedScore;
