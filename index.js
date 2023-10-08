function findLongestWordInSentence(sentence) {
  const wordsArray = sentence.match(/[a-z]+/gi) || [];
  let longestWord = "";
  let maxWordLength = 0;
  let maxVowelsCount = 0;

  for (const word of wordsArray) {
    const wordLength = word.length;
    const vowelsCount = (word.match(/[aeiou]/gi) || []).length;

    if (
      wordLength > maxWordLength ||
      (wordLength === maxWordLength && vowelsCount > maxVowelsCount)
    ) {
      longestWord = word;
      maxWordLength = wordLength;
      maxVowelsCount = vowelsCount;
    }
  }

  return longestWord;
}

// Sample input
const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";

// Output
console.log(findLongestWordInSentence(sentence));
