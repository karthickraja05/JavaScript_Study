

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

console.log(fruits.at(-4));
console.log(fruits1.at(-1));



// console.log(fruits);

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('Hello Man, How are you?'); } ];

// get the object at index 1 and then show its name
console.log(arr[1].name);

// get the function at index 3 and run it
console.log(arr[3]());; 


// console.log('How are you, Whats Up???');
// console.log('How is Going .... ');
// console.log('Just Chat with you through code, apart from nothing...');

console.log('What are you doing in sunday...???');
console.log('Have you did any important work...??');
console.log('Have you find anything different...???');

