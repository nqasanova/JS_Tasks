function analyzeArray(arr) {
    if (arr.length === 0) {
      console.log("The array is empty.");
      return;
    }
  
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
  
    // Initialize objects to store the frequency of elements.
    const frequency = {}; // frequency is the number of times a particular element appears in the input array.
    
    // Iterate through the array to calculate sum, min, max, and element frequency.
    for (const num of arr) {
      sum += num;
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
  
      if (frequency[num]) {
        frequency[num]++;
      } else {
        frequency[num] = 1;
      }
    }
  
    const average = sum / arr.length;
  
    // Find the most repeated and least repeated element.
    let mostRepeatedElement, leastRepeatedElement;
    let mostRepeatedCount = 0, leastRepeatedCount = arr.length + 1;
  
    for (const num in frequency) {
      if (frequency[num] > mostRepeatedCount) {
        mostRepeatedCount = frequency[num];
        mostRepeatedElement = num;
      }
  
      if (frequency[num] < leastRepeatedCount) {
        leastRepeatedCount = frequency[num];
        leastRepeatedElement = num;
      }
    }
  
    console.log("Sum:", sum);
    console.log("Average:", average);
    console.log("Min:", min);
    console.log("Max:", max);
    console.log("Most Repeated Element:", mostRepeatedElement);
    console.log("Least Repeated Element:", leastRepeatedElement);
  }
  
  const inputArray = [1, 2, 3, 4, 2, 5, 3, 1, 6, 3];
  analyzeArray(inputArray);