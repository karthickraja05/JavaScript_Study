let sample_test = `test by 
* karthick`;

let sample_test2 = `M\nY`;
// Error
// sample_test2 = "test by 
// * karthick";

// console.log(sample_test);

// console.log(sample_test2.length);
// console.log(sample_test2);

let str = `Hello`;

// console.log( str[1000] ); // undefined
// console.log( str.charAt(1000) ); // '' (an empty string)

str = 'Widget with id jsjsjjsj';

// console.log(str.indexOf('Widget'));
// console.log(str.indexOf('widget'));
	
let pos_s = str.indexOf('id');

// console.log(str.indexOf('id'));
// console.log(str.indexOf('id',13));
// console.log(str.indexOf('id'));
// console.log(str.lastIndexOf('id'));

// The bitwise NOT trick
console.log(~-1);

if (~str.indexOf("cWidget")) {
  console.log( 'Found it!' ); // works
}else{
  console.log( 'Not Found it!' ); // works
}



//  includes

// console.log( "Widget with id".includes("Widget"));
// console.log( "Hello".includes("Bye"));
// console.log( str.includes("id",12));
// console.log( str.indexOf("id",11));


// Start With ,EndWith
// console.log("Widget".startsWith("Wid"));
// console.log("Widget".endsWith("get"));

// slice [ start ,end] , negative support
// substring [ start ,end] start > end negative not support
// substr [ start ,length] 


// console.log("z".codePointAt(0));
// console.log("Z".codePointAt(0));
// console.log("Z" > 'z');
// console.log("z" > 'Z');
// console.log("Zaa" > 'ZaZ');
// console.log("Za" > 'Zb');

let i = 65536;
let surrogate_pair = '😂';
console.log(surrogate_pair.charCodeAt(0).toString(2));
console.log(surrogate_pair.charCodeAt(0).toString(16));
console.log("S\u0307\u0323".normalize() );
console.log("S\u0307\u0323");

// setInterval(()=>{

// })
// setInterval(()=>{
//   for (j=0; j <= 100; j++) {
//     i++;
//     console.log(`${i} - ${String.fromCodePoint(i)}`);
//   }
//   console.log(i);
// },1000)


$('#button').click(function(){
  i++;
  let string = String.fromCodePoint(i);
  $('#output').text(string);
});

function ucFirst(name){
  return name[0].toUpperCase() + name.slice(1);
  let lower = name.toLowerCase();
  let upper = name.toUpperCase();
  let n = lower.length;
  return `${upper[0]}${lower.substring(1,n)}`;

}

console.log(ucFirst("karthikRaja"));;


function checkSpam(str){
  let spam_words = ['viagra','xxx'];

  return spam_words.some( item => {
      if(str.toLowerCase().includes(item)){
        return true;
      }
  });
  
  // other ans
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');

}

// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));
// console.log(checkSpam('buy ViAgRA now'));


function truncate(str,maxlen){
  let n = str.length;
  if(maxlen >= n){
    return str;
  }
  let firstHalf = str.slice(0,maxlen-1);
  let countOfDot = n-maxlen-1;
  console.log(countOfDot);
  if(countOfDot > 0){
    return firstHalf+'.'.repeat(countOfDot);
  }else{
    return firstHalf;
  }

}

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));

result = truncate("What I'd like to tell on this topic is:", 20);
console.log(result);