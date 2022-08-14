/*
https://coursework.vschool.io/array-reduce-exercises/
*/

function total(arr) {
   return arr.reduce((total,num)=>{
   		return total + num;
   },0);
}

// console.log(total([1,2,3])); // 6



var voters = [
    {name: 'Zack', age: 19, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Bob' , age: 30, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name:'Jake' , age: 32, voted: true},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Becky', age: 43, voted: false},
    {name:'Tami' , age: 54, voted:true},
    {name:'Ed' , age:55, voted:true},
];

/*

Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

*/

function voterResults(arr) {
   let result = {
   		numYoungVotes: 0,
   		numYoungPeople: 0,
   		numMidVotesPeople: 0,
   		numMidsPeople: 0,
   		numOldVotesPeople: 0,
   		numOldsPeople: 0 
   };
   return arr.reduce((currentResult,item)=>{

   		if(item.age >= 18 && item.age <= 25){
   			if(item.voted)
   				++currentResult.numYoungVotes;

   			++currentResult.numYoungPeople;
   		}else if(item.age >= 26 && item.age <= 35){
   			if(item.voted)
   				++currentResult.numMidVotesPeople;

   			++currentResult.numMidsPeople;
   		}else if(item.age >= 36 && item.age <= 55){
   			if(item.voted)
   				++currentResult.numOldVotesPeople;

   			++currentResult.numOldsPeople;
   		}

   		return currentResult;

   },result);

   return result;
}

console.log(voterResults(voters)); 
// Returned value shown below:
/*
{ numYoungVotes: 1,
  numMidVotesPeople: 3,
  numOldVotesPeople: 3,
  numYoungPeople: 4,
  numMidsPeople: 4,
  numOldsPeople: 4 
}
*/
