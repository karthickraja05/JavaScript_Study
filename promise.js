const callback1 = function(callback2){
	callback2('super');
}

// callback1((msg)=>{
// 	$.ajax({
// 		url: "http://localhost/project/JavaScript_Study/ajax.php", 
// 		success: function(result){
// 	   		console.log(result);
// 		}
// 	});
// });

const p1 = new Promise((resolve,reject)=>{
	$.ajax({
		url: "http://localhost/project/JavaScript_Study/ajax.php?id=4", 
		success: function(result){
	   		resolve(`from Promise ${result}`);
		}
	});
	/*setTimeout(()=>{
		resolve('nice one');
	},3000)*/
});

const p2 = new Promise((resolve,reject)=>{
	$.ajax({
		url: "http://localhost/project/JavaScript_Study/ajax.php?id=2", 
		success: function(result){
	   		resolve(`from Promise 2 ${result}`);
		}
	});
	/*setTimeout(()=>{
		resolve('nice one');
	},3000)*/
});

p2.then((msg)=>{
	console.log(msg)
});

p1.then((msg)=>{
	console.log(msg)
});


console.log('Welcome');
console.log('Welcome 1');
console.log('Welcome 2');


// Promise.all([
// 	p1,
// 	p2
// ]).then((msg)=>{
// 	console.log(msg);
// });

// Promise.race([
// 	p1,
// 	p2
// ]).then((msg)=>{
// 	console.log(msg);
// });


