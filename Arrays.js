

let fruits = ['Apple','Orange','Banana'];
let fruits1 = ['Apple','Orange','Banana'];

if (!fruits.__proto__.reverseVal) { 
  fruits.__proto__.reverseVal = function(number) {
  	if(number < 0){
  		number = this.length - Math.abs(number); 
  	}
    return this[number];
  };
}

if (!fruits.__proto__.valueOf1) { 
  fruits.__proto__.valueOf1 = function() {
    return '56';
  };
}

// console.log(fruits.at(-4));
// console.log(fruits1.at(-1));



// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('Hello Man, How are you?'); } ];

// get the object at index 1 and then show its name
// console.log(arr[1].name);

// get the function at index 3 and run it
// console.log(arr[3]());; 


let test1 = [1,23,4,5];

// console.log(test1);

test1.push('33'); // add element to end
test1.pop(); // remove element from end
test1.shift(); // remove element from satrt
test1.unshift('45'); // add element to start
test1.unshift('45',233); // add element to start

fruits = []; // make an array

fruits[2] = 5; // assign a property with the index far greater than its length
fruits[1] = 15; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name
fruits.age1 = 35; // create a property with an arbitrary name
fruits.test = function(){
  return this.length+'testst';
}
fruits.push('3223');
// console.log(fruits.test());
// console.log(fruits);


// for (let key in test1) {
//   console.log(key);
//   console.log( test1[key] ); // Apple, Orange, Pear
// }

fruits12 = ["Apple", "Orange", "Plum"];
fruits12.age1 = 35; // create a property with an arbitrary name
// iterates over array elements
for (let fruit of fruits12) {
  // console.log( fruit );
}

// console.log( [] + 1 ); // "1"
// console.log( [1] + 1 ); // "11"
// console.log( [1,2,3,4] + 1 ); // "1,21"

// console.log(0 == '');
// console.log('0' == '');
// console.log('' == 0);
// console.log('0' == 0);
// console.log('1' == 1);

let test4 = [1,23,5];
let test5 = [1,23,9];

test5.Karthi = 'sdlsdl';


// console.log(test4.valueOf());
// console.log(test5);

// console.log(test5);

let user = ['karthi'];
let user2 = user;

// console.log(user2 === user);
user.push('sdsd');
// console.log(user2 === user);
// console.log(user);
// console.log(user2);

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

function task2(){
  let styles = ['Jazz', 'Blues'];
  styles.push('Rock-n-Roll');

  let middle_index = Math.ceil(styles.length / 2);
  styles[middle_index] = 'Classics';
  styles.shift();
  console.log(styles);
  styles.unshift('Rap', 'Reggae');
  console.log(styles);

}

// task2();

function task3(){
  let arr = ["a", "b"];

  arr.push(function() {
    console.log(this);
  });

  arr[2](); // ?
}

// task3();

function sumInput(){
  let sum = [];
  while(true){
    let number = prompt('Enter Add Number');
    if(number == null){
      break;
    }
    number = +number;
    if(isNaN(number)){
      break;
    }
    sum.push(number);
    
  }
  let sum_val = sum.reduce((pre,cur)=>pre+cur,0);
  console.log(sum);
  console.log(sum_val);
  
}

sumInput();