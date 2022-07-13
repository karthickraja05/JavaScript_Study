let sample_test = `test by 
* karthick`;

let sample_test2 = `M\nY`;
// Error
// sample_test2 = "test by 
// * karthick";

// console.log(sample_test);

// console.log(sample_test2.length);
// console.log(sample_test2);

let str = `Hello`;

// console.log( str[1000] ); // undefined
// console.log( str.charAt(1000) ); // '' (an empty string)

str = 'Widget with id jsjsjjsj';

// console.log(str.indexOf('Widget'));
// console.log(str.indexOf('widget'));
	
let pos_s = str.indexOf('id');

// console.log(str.indexOf('id'));
// console.log(str.indexOf('id',13));
// console.log(str.indexOf('id'));
// console.log(str.lastIndexOf('id'));

// The bitwise NOT trick
console.log(~-1);

if (~str.indexOf("cWidget")) {
  console.log( 'Found it!' ); // works
}else{
  console.log( 'Not Found it!' ); // works
}



//  includes

console.log( "Widget with id".includes("Widget"));
console.log( "Hello".includes("Bye"));
console.log( str.includes("id",12));
console.log( str.indexOf("id",11));


// Start With ,EndWith
console.log("Widget".startsWith("Wid"));
console.log("Widget".endsWith("get"));