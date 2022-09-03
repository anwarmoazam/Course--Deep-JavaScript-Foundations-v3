

// function along with its Lexical scope bundle together forms is closures

/*
Uses of Closures :
	-Module Design Pattern 
	-Currying
	-Functions like once
	-memoize
	-maintaining state in async world
	-Iterators
	-and many more...
*/

// import ask from "./modules.mjs";

// ask("It's a default import, right?");

function z() {
	var b = 900;
	function x() {
		var a = 7;
		function y() {
			console.log(a,b);
		}
		a = 100;
		return y;
	}
	return x();
}



var f = z();

// console.log(f);

// f();
function tablePrint(num){
	setTimeout(function(){
		for(let i=1; i<=10; i++){
			console.log(num*i);
		}
	},1000)
	console.log(`Table of ${num}`);
}

tablePrint(2);

// setTimeout(tablePrint,1000);

/*
//setTimeout with var
for(var i=1; i<=10; i++){
	setTimeout(function(){
		console.log(`i : ${i}`);
	},i*1000);
}
*/

//setTimeout with let
for(let i=1; i<=10; i++){
	setTimeout(function(){
			console.log(i);
	},i*1000);
}

// for(var i=1; i<=10; i++){
// 	let j = i;
	// setTimeout(function(){
	// 	console.log(`2 x ${j} : ${j*2}`);
	// },j*1000);
// }

// for(var i=1; i<=10; i++){
// 	let j = i;
// 	setTimeout(function(){
// 		console.log(`2 x ${j} : ${j*2}`);
// 	},j*1000);
// }