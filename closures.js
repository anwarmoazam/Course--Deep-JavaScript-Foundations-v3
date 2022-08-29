

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

f();