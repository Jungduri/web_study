/*
function a(){
  console.log("A");
}
*/
var a = function(){
  console.log('g');
}

function slowfunc(callback){
  callback();
}

slowfunc(a);