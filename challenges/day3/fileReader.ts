import fs from "fs";

const convertFileToInput = (file: string) => {
  const string = fs.readFileSync(file, "utf8").toString();
  const array = string.split("\n");

  return array;
};

export default convertFileToInput;
