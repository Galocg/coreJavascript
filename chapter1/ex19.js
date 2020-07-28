var a;
console.log(a); // undefined

var obj = {a:1};
console.log(obj.a); // 1
console.log(obj.b); // undefined
//console.log(b);


var func = function(){};
var c = func();
console.log(c); // undefined