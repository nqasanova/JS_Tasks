function printSlices(word) {
    for (let i = 1; i < word.length; i++) {
      // Slice the word into two parts: the first part and the second part
      const firstPart = word.slice(0, i);
      const secondPart = word.slice(i);
      console.log(`${firstPart}_${secondPart}`);
    }
  }
  
  const input = "SITE";
  printSlices(input);