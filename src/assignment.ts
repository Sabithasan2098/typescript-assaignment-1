// ## **Problem 1**
// **Functions and Default Parameters**
// Create a TypeScript program that declares a function that takes two parameters, a string and a number.
//  The function should log the string parameter
//  repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

function reaped(name: string, num: number = 3) {
  for (let i = 0; i < num; i++) {
    console.log(name);
  }
}
reaped("sabit", 9);

// ----------------------------------------------------------------------------=>
// ## Problem 2  🧨🧨
// Write a function that takes in an array of objects with properties `name` and `age`, and returns only the objects where
// the person's age is greater than or equal to 18,

type Obj = {
  name: string;
  age: number;
};

const objects: Obj[] = [
  { name: "sabit", age: 28 },
  { name: "saiful", age: 24 },
  { name: "john", age: 16 },
  { name: "morgan", age: 14 },
];
function under18(persons: Obj[]): Obj[] {
  return persons.filter((person) => person.age >= 18);
}
const result = under18(objects);
console.log(result);

// ----------------------------------------------------------------------------=>
// ## **Problem 3:**
// Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number
//  of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

function reverseArrayOfStrings<T>(...items: T[]): T[] {
  return items.reverse();
}

const result2 = reverseArrayOfStrings("sabit", "saiful", "avi", "naime");
console.log(result2);

// ----------------------------------------------------------------------------=>
// ## **Problem 4:**

// Create a TypeScript class called `Person` that has private properties name and age, and a public method getDetails that returns
//  a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

// Create a TypeScript class called `Student` that extends the Person class and has an additional private property grade. Define a
//  public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and
//   initialize the name and age properties.

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `The name is ${this.name} & age is ${this.age}`;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getGrade() {
    return `My result is ${this.grade}`;
  }
}
const result3 = new Student("sabit", 22, "A+");
console.log(result3.getGrade());

//------------------------------------------------------------------------------=>
// ## **Problem 5:**
// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether
// the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
type Alphanumeric = any;
function anything(anything: Alphanumeric) {
  if (typeof anything === "string") {
    console.log(anything);
  } else {
    console.log(new Error());
  }
}
anything("11");
