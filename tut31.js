console.log('this is tutorial31.js');

class Employee {
    constructor(givenName,givenExperience, givenDivision) {
    this.name = givenName;
    this.experience =givenExperience;
    this.division =givenDivision;
}
  slogan(){
      return ` iam ${this.name} and this company is the best`;
  }
  joiningyear(){
      return 2020 - this.experience;
  }
  static  add(a,b){
      return a+b;
  }
}

class programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}
rohan = new programmer ('rohan',3, 'lays', 'go', 'rohan329')
console.log(rohan)
console.log(tohan.favoriteLanguage())
console.log(programmer.multiply(3,4));
// harry = new Employee('harry', 44 , 'Division');
// console.log(harry.joiningyear());

