
let message = "ES6 Modules";

function user(name){
    console.log(`Hello ${name}`);
}

class test{
    constructor(){
        console.log("Constructor Method");
    }
}

export {message,user,test}


export default function(){
    console.log("Hello");
}