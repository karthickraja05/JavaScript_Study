

let fruits = ['Apple','Orange','Banana'];
let fruits1 = ['Apple','Orange','Banana'];

if (!fruits.__proto__.at) { 
  fruits.__proto__.at = function(number) {
  	if(number < 0){
  		number = this.length - Math.abs(number); 
  	}
    return this[number];
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


for (let key in test1) {
  console.log(key);
  console.log( test1[key] ); // Apple, Orange, Pear
}

