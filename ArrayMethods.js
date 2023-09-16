// Converting an Array into String 

// const fruits =["apple","banana","orange"];
// const res = fruits.toString();
// console.log(res);


// Shifting an array element by using METHOD shift();

// const fruits =["apple","banana","orange"];
// const res = fruits.shift();
// console.log(res);
// console.log(fruits);


// Unshifting an array element by using METHOD shift();

// const fruits =["apple","banana","orange"];
// const res = fruits.unshift("lemon");
// console.log(fruits);


//Changing and Manupulating Array Elements

// const fruits =["apple","banana","orange"];
// fruits[0] = "kiwi";
// console.log(fruits);


//JS Array length

// const fruits =["apple","banana","orange"];
// fruits[fruits.length] = "mango";
// console.log(fruits);


// JS delete Array Elements

// const fruits =["apple","banana","orange"];
//  deletefruits[0];
// console.log(fruits);


//Merging and Concatinating two or more than two Arrays

// const myGirls = ["rima", "soma"];
// const myBoys = ['raj', 'arun'];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// const arr1 = ["rima", "soma"];
// const arr2 = ['raj', 'arun'];
// const arr3 = ['rahul', 'pooja'];
// const myChildren = arr1.concat(arr2,arr3);
// console.log(myChildren);


// The concat() method can also take strings as arguments:

// Example (Merging an Array with Values)
// const arr1 = ["raman", "suman", "tejas"];
// const myChildren = arr1.concat("Peter"); 
// console.log(myChildren);


// Flattening an array

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);


// JS array slice()method

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);


//JS splice() method

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi"); // replacing two  elements placed from index 2 
// console.log(fruits);


//Sorting an Array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);


//Reversing an Array

    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.sort();
    // fruits.reverse();
    // console.log(fruits);


//Numeric Sort in Ascending Order

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points);


//Numeric Sort in Descending Order

 //const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});
//console.log(points);


//Sorting an Array in Random Order

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
console.log(points);