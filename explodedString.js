// Initializing an empty string to store the exploded string
function explodeString(inputString) {
    let explodedString = '';
    for (let i = 0; i < inputString.length; i++) {
      // for each character at index i, we use the repeat method to repeat the character i + 1 times and append it to explodedString.
      explodedString += inputString[i].repeat(i + 1);
    }
    return explodedString;
  }
  
  const input = "Baku";
  const exploded = explodeString(input);
  console.log(exploded);