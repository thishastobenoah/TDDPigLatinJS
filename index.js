function translate (word){
      const lowerCaseWord = word.toLowerCase();
      const vowels = ['a', 'e', 'i', 'o', 'u'];

      const firstVowelIndex = Array.from(lowerCaseWord).findIndex(char => vowels.includes(char));
    
      if (firstVowelIndex === 0) {
        return lowerCaseWord + 'way';
      }
    
      const prefix = lowerCaseWord.slice(0, firstVowelIndex);
      const suffix = lowerCaseWord.slice(firstVowelIndex);
      return suffix + prefix + 'ay';
}

 module.exports = translate;