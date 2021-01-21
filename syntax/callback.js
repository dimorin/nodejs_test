/* function a(){
    console.log('sdf');
} */

var a = function(){
    console.log('sdf');
}

function slow(callback){
    callback();
}

slow(a);