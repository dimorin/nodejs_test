var q = {
    v1:'hee',
    v2:'hello',
    f1:function(){
        console.log(this.v1);
    },
    f2:function(){
        console.log(this.v2);
    }
}

q.f1();
q.f2();