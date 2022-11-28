const responseDataSaver = {

};

async function callApiIfNotPresent(search){
    if(search in responseDataSaver) return responseDataSaver[search];
    let res = await fetch(`https://api.agify.io/?name=${search}`);
    let res1 = await res.json();
    if(res.status == 200){
      responseDataSaver[search] = res1;
      console.log(responseDataSaver);
    }
}

$('#button').click(function(){
  let val = $('#search').val();
  let trim_val = val.trim();
  if(trim_val.length > 0){
    callApiIfNotPresent(trim_val);
  }
});