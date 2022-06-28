let user1 = {
	name: 'Karthickraja',
}

let user3 = {
	name: 'Karthickraja',
}

let user2 = user1;

// console.log(user2);
// console.log(user2 == user1);
// console.log(user3 == user1);



$('#button').click(function(){
	var name = prompt('Enter User Name','');
	user2.name = name;
	console.log(user1);
	console.log(user2);
});


let user5 = { name: "John" };

let permissions1 = { canView: true , year: 2016 };
let permissions2 = { canEdit: true , year: 2018 };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user5, permissions1, permissions2);

console.log(user5);