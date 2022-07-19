function getExcellentAward(award) {

	for(const item in award) {
		switch(award[item]) {
		  case true:
		  	return item;
		  default:
		    // code block
		}
	}

	return 'nothing';
}


let karthick = {
	ratna : false,
	bhushan : true,
	filmfare : true,
};

console.log(getExcellentAward(karthick));