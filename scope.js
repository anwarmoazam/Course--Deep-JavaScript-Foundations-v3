// "use strict";

// 1
// console.log(1,x);
// var x = 10;
// console.log(3,x);
// if (true) {
//     console.log(5,x);
//     var x = 5;
//     console.log(7,x);
// }

// console.log(10,x)


// 2
// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();

// 3
// hoistedFunction();

// function hoistedFunction(){ 
//   console.log(" Hello world! ");
// }


// 4
// function doSomething(){
//     x = 33;
//     console.log(x);
//     var x;
// }
// console.log(36, x);

// doSomething();



// 5
// var x;
// console.log(x);
// x = 23;



// 6
// x = 23;
// var x; 

// console.log(x);

// 7
// (function(){
//     var a = b = 3;
//     console.log(59, a);
//     console.log(60, b);
//   })();
//   console.log(62, a);
//   console.log(63, b);


// function pattern1(a) {
//     let str = "";
//     for(let i=0; i<a; i++){
//         for(let j=0; j<a; j++){
//             str += "*";
//         }
//         str += "\n"
//     }
//     return str;
// }

// console.log(pattern1(5));

// function pattern2(a) {
//   let str = "";
//   for(let i=0; i<a; i++){
//       for(let j=0; j<a; j++){
//         if(i > 0 && i < a && j > 0 && j < a){
//           str += " ";
//         } else {
//           str += "*";
//         }
//       }
//       str += "\n"
//   }
//   return str;
// }

// console.log(pattern2(4))


// function pattern2(a) {
// 	let str = '';
// 	for (let i = 0; i < a; i++) {
// 		for (let j = 0; j < a; j++) {
// 			if (i == 0 || i == a - 1 || j == 0 || j == a - 1) {
// 				str += '*';
// 			} else {
// 				str += ' ';
// 			}
// 		}
// 		str += '\n';
// 	}
// 	return str;
// }

// console.log(pattern2(4));


function table(num){
    for(var i = 1; i <= 10; i++){
        let j = i;
        setTimeout(function (){
            // console.log(`${num} x ${j} : ${j*num}`);
            console.log(`${j*num}`);
        },j * 1000);
    }
}


console.log(table(6));
