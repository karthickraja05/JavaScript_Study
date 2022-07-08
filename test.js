function List(val,next){
	this.val = val;
	this.next = next ? next : null;
}


let list1 = new List(5);
let list2 = new List(7);
let list3 = new List(8);
let list4 = new List(9);

list3.next = list4;
list2.next = list3;
list1.next = list2;


let list6 = new List(1);
let list7 = new List(2);
let list8 = new List(3);
let list9 = new List(6);

list8.next = list9;
list7.next = list8;
list6.next = list7;


function mergeLinkedList(list1,list2){
	let arrVal = [];
	let temp = list1;

	while(temp){
		arrVal.push(temp.val);
		temp = temp.next;
	}
	temp = list2;
	while(temp){
		arrVal.push(temp.val);
		temp = temp.next;
	}
	arrVal.sort((a,b)=> a - b);
	if(arrVal.length == 0){
		return null;
	}
	return createLinkedList(arrVal);
}

function createLinkedList(arr){
	
	let list_name = [];
	while(arr.length > 0){
		let val = arr.shift();
		let temp = new List(val);
		list_name.unshift(temp);
	}
	let temp_obj = '';
	while(list_name.length > 0){
		let list = list_name.shift();
		if(temp_obj == ''){
			temp_obj = list;
		}else{
			list.next = temp_obj;
			temp_obj = list;
		}
	}
	return temp_obj;
}

let result = mergeLinkedList(list1,list6);
console.log(result);