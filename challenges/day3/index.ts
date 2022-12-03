const backpackSorter = (backpacks: string[]) => {
  let priorities = 0;

  backpacks.forEach((backpack) => {
    const compartments = compartmentSplit(backpack);
    const matchedLetter = compareCompartments(compartments[0], compartments[1]);
    priorities += priorityValue(matchedLetter);
  });

  return priorities;
};

export const compartmentSplit = (backpack: string) => {
  let compartmentSize = backpack.length;
  const firstCompartment = backpack.slice(0, compartmentSize / 2);
  const secondCompartment = backpack.slice(compartmentSize / 2);
  return [firstCompartment, secondCompartment];
};

export const compareCompartments = (
  firstCompartment: string,
  secondCompartment: string
) => {
  const firstCompartmentLetters = firstCompartment.split("");
  const secondCompartmentLetters = secondCompartment.split("");
  let match = "";

  firstCompartmentLetters.forEach((letter) => {
    if (secondCompartmentLetters.includes(letter)) {
      match = letter;
    }
  });

  return match;
};

export const priorityValue = (letter: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetArray = alphabet.split("");
  return alphabetArray.indexOf(letter) + 1;
};

export default backpackSorter;
