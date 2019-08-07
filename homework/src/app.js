{
  /* Your homework goes here */
  
  /* STRINGS */
const myString = "hello,this,is,a,difficult,to,read,sentence";

//  Add the string to your file and log it.
console.log(myString);

//  Log the length of myString.
console.log(myString.length);

//  Replace commas with spaces ????
let myString2 = myString.replace(',' , ' ');
console.log(myString2);  

  /* ARRAYS */

const favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

//  Add a statement that adds your favorite animal say 'turtle' to the existing array.
favoriteAnimals.push("Horse:'turtle'");

//  Explain in a comment what do you think the new array will look like.
    // There will be 4 elements: first 3 are old ones and the 4th. one is "turtle"

// Log your new array.
console.log(favoriteAnimals);

// Now add another favorite animal to the array but make sure it is placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, "Samoyed dog");

// Explain in a comment what do you think the new array will look like.
    //The array will have 5 elements and the new-added element will be set on index 1

// Log your new array.
console.log(favoriteAnimals);

// Delete 'giraffe' from the array.
favoriteAnimals.splice(3,1);

  /* OPERATORS */

// 1.
0 == '0'; // true
0 == [];  // true
"0" == [];  // false

// Mathematically, if a == b and b == c, then a == c. Can you explain ...?
     0 == '0' // it is true because loose equality compares the values without looking types.
     0 == []  // it is true becuase if we convert the empty array to number we get zero : Number([]) = 0
     "0" == [] // it is false because there is a truthy and falsy conflict at this equality. 

// 2. 
const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

    // x == y,   it is false because x and y reference to different values. 
    // x === y,  it is false because x and y reference to different values.
    // z === y,  this is true since they reference to same value.
    // z == x ,  it is false because x and y reference to different values.

// 3. 
const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
    // Changing o2 changes o3 since o3 is referenced to value of o2.
    // But changing o1 doesn`t change o3 since they are not correlated.

//Does the order that you assign (o3 = o2 or o2 = o3) matter?
    // It does matter since o2 is a constant and cannot be reassigned.
  /* QUESTIONS FROM HYF REPOS */

// 8.1 First declare at least four variables and assign them different data types.

let x = '123';

let y = 123;

let arr = ['John'];

let boo = true;

// 8.2 For each variable write a console.log statement that logs the value

console.log("The value of my variable x is: +x");

console.log("The value of my variable y is: +y");

console.log("The value of my variable arr is: +arr");

console.log("The value of my variable boo is: +boo");



// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.

console.log("The type of my variable x is: string");

console.log("The type of my variable y is: number");

console.log("The type of my variable arr is: object");

console.log("The type of my variable boo is: boolean");

// 8.4 Now use typeof to log the actual type of your variables.

console.log(typeof x);

console.log(typeof y);

console.log(typeof arr);

console.log(typeof boo);

// 8.5 Now compare the types of your different variables with one another.

console.log(typeof x === typeof y); 

console.log(typeof x === typeof arr);

console.log(typeof x === typeof boo);

console.log(typeof y === typeof arr);

console.log(typeof y === typeof boo);

console.log(typeof arr === typeof boo);


//8.6 Make sure to also show a message when the variables you are comparing are not the same type.

if (typeof x === typeof y) {
    console.log('SAME TYPE');
  } else {
    console.log('NOT SAME TYPE');
}



// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?

let x = 7;
x = x % 3 ;
console.log('The new value of x is : 1 ');
console.log(x);

// 9.1 Add at least 3 console.log statements in which you show that you understand what % does.

let a = 3;
a = a % 3; // 0
console.log(a);

let b = 5;
b = b % 5; // 0
console.log(b);

let c = a * b;
c = c % 15; // 0
console.log(c);

let d = c + 2;
d= d % 15; // 2
console.log(d);

// 10.1 Can you store multiple types in an array?
    // Yes, it can be stored in that way. 
    arr = [1,2,123,"string",[true],['a','b',['cde']],null]; //(7) [1, 2, 123, "string", Array(1), Array(3), null]

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
    // in this case === equality just cares the type`s values. 6/0 is a Nan and 10/0 is a Nan. So the equlatiy will be true.
     
    // if we test 6/0 = 10/0, it gives invalid left-hand side error. 
    // However, if we write the equality as 6/0 <= 10/0, it gives true. 
    // So I am not sure yet which type of comparison we can freely make :)
    
// 10.3Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).

let i1 = 6/0;
let i2 = 10/0;
if (i1 === i2) {
    console.log(true);
}
else {
    console.log(false);
}



}