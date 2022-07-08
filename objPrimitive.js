let obj = {
  user_name: 'Karthickraja',
};

let d = new Date();

// output
// alert(obj);

let anotherObj = {

};

// using object as a property key
anotherObj[obj] = 123;

console.log(anotherObj[obj]);


// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus

// console.log(obj.toString());
// console.log(obj);
// console.log(d[Symbol.toPrimitive]('number'));

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    // alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

let user1 = {
  name: 'Kar',
  valueOf() {
     return this.name.length;
  }
};

let user2 = {
  name: 'Ka',
  valueOf() {
     return this.name.length;
  }
}
var test = 'false';
if(test){
  // console.log('this1');
}
// console.log(true);
// console.log(user1 / user2);


// test: for (var i = 0; i < 5; i++) {
  
//   for (var j = 0; j < 5; j++) {
//     if(i == 3 && j == 3){
//       break test;
//     }
//     console.log('this');
//   }
// }

if (!Math.anand) { // if no such function
  // implement it
  Math.anand = function() {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return 'Anand';
  };
}


// console.log(Math.PI);
// console.log(Math);

// conversions demo:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500

// console.log(user);

// let delta = date1 - date2;

// // less/greater comparison
// let greater = user1 > user2;


var testMy = {
  name: 'Karthickraja',
  valueOf() {
     return this.name;
  },
  toString(){
    return this.name;
  }
}

var str1 = 'karthi';

str1.__proto__.test = function(){
  this1 = new String("foo");
  console.log(this);
  // this[[PrimitiveValue]] = 'yes';
  return this1;
}

console.log(str1);