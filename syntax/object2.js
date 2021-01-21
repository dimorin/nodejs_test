var f = function(){
    console.log(2);
    console.log(3);
}

var a = [f];
a[0]();

var o ={
    test_f:function(){
        console.log(4);
    }
}
o.test_f();