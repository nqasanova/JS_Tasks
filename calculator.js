function calculateLetterGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  const fullName = prompt('Please enter your full name:');
  
  if (fullName) {  // Check if the user entered a name
    
    const courseGrade = parseFloat(prompt('Please enter your course grade:'));
    
    if (!isNaN(courseGrade)) {  // Check if the input is a valid number
        
      alert('Hello, ' + fullName + '!');
      
      if (courseGrade >= 60) {
        const letterGrade = calculateLetterGrade(courseGrade);
        alert('Congratulations! You have passed the course with a grade of ' + letterGrade);
      } else {
        alert('Sorry, you have failed the course.');
      }
      
    } else {
      alert('Invalid input for course grade. Please enter a valid number.');
    }
    
  } else {
    alert('You did not enter your full name.');
  }
