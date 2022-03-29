var obj = { num: 4 };
var addToThis = function(a, b, c) {
    return this.num + a + b + c;
}
console.log(addToThis.call(obj, 2, 3, 4));
var arr = [2, 3, 4];
console.log(addToThis.apply(obj, arr));
var bound = addToThis.bind(obj);
console.log(bound(2, 3, 4));
var student = { age: 20 };
var addToThis = function() {
    return this.age;
}
var bound = addToThis.bind(student);
console.log(bound());


let multiply = function(x, y) {
    console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);