function Person(firstname, lastname, date_of_birth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.date_of_birth = date_of_birth;
  
    this.fullName = function() {
      return this.firstname + ' ' + this.lastname;
    };
  
    this.age = function() {
      const currentYear = new Date().getFullYear();
      const birthYear = new Date(this.date_of_birth).getFullYear();
      return currentYear - birthYear;
    };
  
    this.toString = function() {
      const age = this.age();
      return this.fullName() + ' is ' + age + ' years old!';
    };
  }
  
  const person = new Person('Doona', 'Kang', '1996-04-28');
  console.log(person.fullName());
  console.log(person.age()); 
  console.log(person.toString());