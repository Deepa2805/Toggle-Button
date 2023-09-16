/*
OBJECT IN JAVASCRIPT
1. A JavaScript object is a collection of named values.
2. The named values in JS Objects, are called Properties.
3. Objects are Variables Containing Variables.
4. JavaScript variables can contain only single Values.
5. But Objects  can contain many values.
6. The values are written as name : value pairs (name and value separated by a colon).

*/

//Creating an Object
const person={
    firstname: "deepa",
    lastname: "pal",
    age: 25       
}
console.log(person.firstname);
console.log(person.firstname+ " " + person.lastname);
 //adding property
 person.gender = "Female";
console.log(person);
//Accessing Object Property
//1st method
console.log(person.age);

//2nd method
console.log(person["firstname"]);

// delete any property

 delete person.age;

 console.log(person);

//  //reassigning any property
 
 person.firstname = "pooja";
  console.log(person);

