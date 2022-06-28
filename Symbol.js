let id1 = Symbol("id");
let id2 = Symbol("id");

// console.log(id1 == id2); // false
// console.log(id1);
// console.log(id2);
// alert(id2);

// let user = { 
//   name: "John",
//   name1: "John2"
// };

// let id = Symbol("id");
// let id3 = Symbol("id");

// user[id] = 1;
// user[id3] = 3;

// console.log( user[id3] ); // we can access the data using the symbol as the key
// console.log( Object.keys(user) ); // we can access the data using the symbol as the key



let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({'name': 'karthic'}, user);

// console.log( Object.keys(clone) );
// alert( clone[id] ); // 123


var age = Symbol();  // declared in another module perhaps?
class Person {
   constructor(n,a){
      this.name = n;
      this[age] = a;  
   }
   introduce(){
       console.log(`My name is ${this.name}. I am ${this[age]-10}.`);
   }
}
var j = new Person('Jane',45);
// j.introduce(); // My name is Jane. I am 35.
// console.log(JSON.stringify(j)); // {"name":"Jane"}
// console.log(Object.keys(j)); // ["name"]
// console.log(j[age]); // 45 (well…only if you know the age in the first place…)
// console.log(age);

let mark = Symbol('mark');

let person1 = {
	name : 'karthick',
	age: 34,
	[mark]: 56,
};

let person2 = {
	name : 'sathis',
	age: 89,
	[mark]: 78,
};
let ui = Symbol('mark');
person1[ui] = 789;
// console.log(person1);
// console.log(person2[mark]);
// console.log(person1[mark]);
// console.log(JSON.stringify(person)); // {"name":"Jane"}


let idR = Symbol.for("id1"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");


// console.log( idR === idAgain ); // true
// console.log( Symbol.keyFor(idR) ); // true
// console.log( idR.description ); // true

const objectSymbols = Object.getOwnPropertySymbols(person2);
console.log(Reflect.ownKeys(person2));
// console.log(person2[objectSymbols[0]]);

// https://blog.bitsrc.io/javascript-symbols-the-most-misunderstood-feature-of-the-language-282b6e2a220e
