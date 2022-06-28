let obj = {};
let result;
// obj.__proto__.check = '5';

// console.log("check" in obj.__proto__);
// console.log("check" in obj);
// console.log(obj.check1s);

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",
  "1": "USA",
  "z": "USA",
  "a": "USA",
  "2": "USA",
};

console.log(codes);

// for (let code in codes) {
//   console.log( code ); // 49, 41, 44, 1
// }



let users_obj = [];

function createUserObj(name){
	return {
		[name]: name,
	}
}


$('#button').click(function(){
	var name = prompt('Enter User Name','');
	users_obj.push(createUserObj(name));
	// printOutput();
	console.log(users_obj);
	
});

function isEmpty(){
	let i = 0;
	for(let key in obj){
		return false;
	}
	return true;
}

console.log(isEmpty());;


let salaries = {
  John: 101,
  Ann: 160,
  Pete: 130
}

function sumObjectValue(object){
	let sum = 0;
	for(let key in object){
		sum += object[key];
	}
	return sum;
}

result = sumObjectValue(salaries);
console.log(result);


// console.log(obj);

function printOutput(){
	var html = '';
	html += '<ol>';
	users_obj.forEach((a,b)=>{
		html += `<li>${b}:${a.name}</li>`;
	});
	html += '<ol>';
	$('#output').html(html);
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);


function multiplyNumeric(menu){
	for(let key in menu){
		if(!isNaN(menu[key])){
			menu[key] *= 2;
		}
	}
}

console.log(menu);

