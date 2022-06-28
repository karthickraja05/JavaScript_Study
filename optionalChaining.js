let user = {
	address: {
		street: 56,
	},

	sayHi: function (a) {
		alert(a);
	}
};  

// user has no address


// let user = null;
let x = 0;

console.log(user.sayHi(x)?.()); // no "user", so the execution doesn't reach sayHi call and x++
// console.log(user?.address12); // no "user", so the execution doesn't reach sayHi call and x++

// alert(x); // 0, value not incremented
// console.log( user?.address ); // undefined (no error)

// delete user?.address; 

// console.log(user);

