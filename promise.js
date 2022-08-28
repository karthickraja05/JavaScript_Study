const p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('nice one');
	},3000)
});

p1.then((msg)=>{
	console.log(msg)
});


const callback1 = function(callback2){
	callback2('super');
}

callback1((msg)=>{
	$.ajax({
		url: "http://localhost/project/JavaScript_Study/ajax.php", 
		success: function(result){
	   		console.log(result);
		}
	});
	console.log('googd');
});