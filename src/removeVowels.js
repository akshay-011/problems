export const removeVowels = (string) => {
  const notVowelRegex = /[^aeiou]/gi;
  const consonants = string.match(notVowelRegex) || [];

  return consonants.join("");
};
