"use strict";

var teacher = "Kyle";
console.log(teacher);
// console.log(topic);
function otherClass(){
    teacher = "Suzy";
    topic = "React";
    console.log("Welcome!");
}

console.log(teacher);
// console.log(topic);

otherClass();

console.log(teacher);
console.log(topic);
