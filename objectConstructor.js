// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let Employee = (name)=>{
// 	this.name = name;
// 	this.isAdmin = false;	
// }

function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

// let hi = User('name');
// console.log(hi);

// let user = new User("Jack");
// user = Employee("Jack");


// console.log(user);
// console.log(user.name);
// console.log(user.isAdmin);

function Accumulator(start){
	this.value = start;
	this.read = function(){
		var userEnteredValue = prompt('Enter Value');
		if(!isNaN(+userEnteredValue)){
			this.value += +userEnteredValue;
		}
	}
}

let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value


$('#button').click(function(){
	
	accumulator.read(); // adds the user-entered value

	$('#output').text(accumulator.value); // shows the sum of these values
	
});