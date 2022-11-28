async function test(){
  let result = await ajaxCall();
  console.log(result);
  console.log('weomce');
}


function ajaxCall(){
  return new Promise((resolve,reject)=>{
    $.ajax({
      url: "http://localhost/project/JavaScript_Study/ajax.php?id=4", 
      success: function(result){
           resolve(result);
      }
    });
  });
}

async function com1(){
  console.log('yess printed before');
  await test();
  console.log('yess printed after');
}

com1();