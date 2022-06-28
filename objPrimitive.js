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

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

console.log(user);

// let delta = date1 - date2;

// // less/greater comparison
// let greater = user1 > user2;