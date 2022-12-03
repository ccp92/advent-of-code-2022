const backpackSorter = (backpacks: string[], day2?: boolean) => {
  let priorities = 0;

  if (!day2) {
    backpacks.forEach((backpack) => {
      const compartments = compartmentSplit(backpack);
      const matchedLetter = compareCompartments(
        compartments[0],
        compartments[1]
      );
      priorities += priorityValue(matchedLetter);
    });
  } else if (day2) {
    const backpackGroups = [],
      size = 3;
    while (backpacks.length > 0) backpackGroups.push(backpacks.splice(0, size));
    backpackGroups.forEach((backpackGroup: string[]) => {
      const matchedLetter = compareCompartments(
        backpackGroup[0],
        backpackGroup[1],
        backpackGroup[2]
      );

      priorities += priorityValue(matchedLetter);
    });
  }

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
  secondCompartment: string,
  thirdCompartment?: string
) => {
  const firstCompartmentLetters = firstCompartment.split("");
  const secondCompartmentLetters = secondCompartment.split("");
  let match = "";

  if (!thirdCompartment) {
    firstCompartmentLetters.forEach((letter) => {
      if (secondCompartmentLetters.includes(letter)) {
        match = letter;
      }
    });
  } else {
    firstCompartmentLetters.forEach((letter) => {
      if (secondCompartmentLetters.includes(letter)) {
        if (thirdCompartment?.includes(letter)) {
          match = letter;
        }
      }
    });
  }

  return match;
};

export const priorityValue = (letter: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetArray = alphabet.split("");
  return alphabetArray.indexOf(letter) + 1;
};

export default backpackSorter;
