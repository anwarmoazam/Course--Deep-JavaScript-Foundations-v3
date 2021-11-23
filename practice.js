// let textBoxDOM = document.querySelector(".input-txt");

console.log('This is Deep JavaScript Foundation, v3 Course by Kyle Simpson');

let a = [1, 2, 3, 4, 5];

let student = { name: 'Anwar Moazam', subject: 'JavaScript', city: 'Pali' };

console.log(typeof a === 'object');

console.log(typeof student === 'object');

for (let key of a) {
	console.log(key);
}

for (let key in student) {
	console.log(key, student[key]);
}

let c = -0;
console.log(c.toString());

let e;

console.log([].toString());
console.log([1, 2, 3].toString());
console.log([[[], [], []], []].toString());
console.log([, , , ,].toString());
console.log({}.toString());

var numStudents = 16;

console.log(`There are ${[numStudents].join('')} students.`);

let name = 'Anwar Moazam';

// textBoxDOM.addEventListener('input', () => {
//     if(textBoxDOM.value.length > 12){
//         alert("Name is too long!!!");
//     } else {
//         console.log(textBoxDOM.value);
//     }
// })

console.log(3 > 2 > 1);

function isValidName(name) {
	if (typeof name == 'string' && name.trim().length >= 3) {
		return true;
	}
	return false;
}

console.log(isValidName('Anwar'));
console.log(isValidName(false));
console.log(isValidName('false'));
console.log(isValidName(null));
console.log(isValidName(undefined));
console.log(isValidName(''));
console.log(isValidName(' \t\n'));
console.log(isValidName('X'));

function hoursAttended(attended, length) {
	if (typeof attended == 'string' && attended.trim() != '') {
		attended = Number(attended);
	}
	if (typeof length == 'string' && length.trim() != '') {
		length = Number(length);
	}
	if (
		typeof attended == 'number' &&
		typeof length == 'number' &&
		attended >= 0 &&
		length >= 0 &&
		Number.isInteger(attended) &&
		Number.isInteger(length) &&
		attended <= length
	) {
		return true;
	}
	return false;
}

console.log(hoursAttended(6, 10));
console.log(hoursAttended('6', 10));
console.log(hoursAttended(6.1, 10));

let aa;

let bb = typeof aa;

console.log(typeof aa);

console.log(aa, bb);
console.log(bb, typeof bb);

// let a = []
// let b = {}

// let c = null;

var studentName1 = 'Anwar Moazam';
var studentName2 = `${studentName1}`;

var workShopEnrollment1 = 16;
var workShopEnrollment2 = workShopEnrollment1 + 1;

console.log(studentName1 == studentName2);
console.log(studentName1 === studentName2);
console.log(workShopEnrollment1 == workShopEnrollment2);
console.log(workShopEnrollment1 === workShopEnrollment2);

function findAll(match, arr) {
	var ret = [];
	for (let v of arr) {
		if (Object.is(match, v)) {
			ret.push(v);
		}
	}
	return ret;
}

var myObj = { a: 2 };

var values = [
	null,
	undefined,
	-0,
	0,
	13,
	42,
	NaN,
	-Infinity,
	Infinity,
	'',
	'0',
	'42',
	'42hello',
	'true',
	'NaN',
	true,
	false,
	myObj,
];

var teacher = 'Kyle';

function otherClass() {
	var teacher = 'Suzy';

	function ask(question) {
		console.log(teacher, question);
	}

	ask('Why?');
}

otherClass();
// ask("Hello");

function teacher1() {
	/*      */
}
e;

var myTeacher = function anotherTeacher() {
	console.log(anotherTeacher);
};

console.log(teacher1);
console.log(myTeacher);
// console.log(anotherTeacher);

// let x = {a: 5, b: 20};
// let y = {...x};

// y.b = 100;

// let x = {a: 5, b: 20};
// let y = JSON.parse(JSON.stringify(x));

// y.b = 100;

let x = { a: 5, b: 20 };
let y = Object.assign({}, x);

y.b = 100;

console.log(x === y);
console.log(x);
console.log(y);

let aaaa = [];
let bbbb = [];
let cccc = aaaa;

console.log(typeof []);
console.log(aaaa == bbbb);
console.log(cccc == aaaa);

// Boxing

let str = '5';

str = +str;

console.log(typeof str);

let anwar = null;
console.log(typeof anwar);
if (anwar == null) {
	anwar = 5;
	console.log(anwar);
} else {
	console.log(anwar);
}

let arr = [];

if (arr) {
	console.log(220);
}

if (arr == true) {
	console.log(224);
}

if (arr == false) {
	console.log(228);
}

function isValidName(name) {
	if (typeof name == 'string' && name.trim().length >= 3) {
		return true;
	}
	return false;
}

console.log(isValidName('Anwar') === true);
console.log(isValidName(false) === false);

function hoursAttended(attended, length) {
	if (typeof attended == 'string' && attended.trim() != '') {
		attended = Number(attended);
	}
	if (typeof length == 'string' && attended.trim() != '') {
		length = Number(length);
	}
	if (
		typeof attended == 'number' &&
		typeof length == 'number' &&
		attended >= 0 &&
		length >= 0 &&
		Number.isInteger(attended) &&
		Number.isInteger(length) &&
		attended <= length
	) {
		return true;
	}
	return false;
}

console.log(hoursAttended(2, 5));

function findAll(match, arr) {
	var ret = [];
	for (let v of arr) {
		if (Object.is(match, v)) {
			ret.push(v);
		} else if (match == null && v == null) {
			ret.push(v);
		} else if (typeof match == 'boolean' && typeof v == 'boolean') {
			if (match == v) {
				ret.push(v);
			}
		} else if (typeof match == 'string' && match.trim() != '' && typeof v == 'number' && !Object.is(v, -0)) {
			if (match == v) {
				ret.push(v);
			}
		} else if (
			typeof match == 'number' &&
			!Object.is(match, NaN) &&
			!Object.is(match, Infinity) &&
			!Object.is(match, -Infinity) &&
			typeof v == 'string' &&
			v.trim() != ''
		) {
			if (match == v) {
				ret.push(v);
			}
		}
	}
	return ret;
}

var myObj = { a: 2 };

var values = [
	null,
	undefined,
	-0,
	0,
	13,
	42,
	NaN,
	-Infinity,
	Infinity,
	'',
	'0',
	'42',
	'42hello',
	'true',
	'NaN',
	true,
	false,
	myObj,
];

// console.log(findAll(-0,[2,null,-0]));

/*


"null" == null
// string == 0
// return false

"undefined" == undefined
//string == NaN
// return false

true == "true"
// "true" == "true"
// returns true

false == "false"
// 0 == true
// because string false returns true and false of booleans is falsy

1 == "1"
// true

0 == "0"
// true

0 == "-0"
// true

[] == ''
// "" == ""
// true

[1,2,3] == '1,2,3'
// 1,2,3 == 1,2,3
// true

[null, undefined] == ','
// , == ,
// true

[[],[],[]] == ",,"
// ,, == ,,
// true

[,,,] == ",,"
// ,, == ,,
// true

1<2<3
1<3
1
// true

3>2>1
1>1
0
// false

let a = {name: "ABC"}
let b = {name: "ABC"}

a==b
false

a===b
false

if (typeof varName !== "null" && typeof varName !== "undefined") {
    return true;
}

if (varName !== null) {
    return true;
}

typeof 1 = "number"
typeof "Anwar" = 'string'
typeof [] = 'object'

console.log(LL)

var a = 10 
function aa (){
    var a = 5;
}

console.log(a); //10

aa();

console.log(a) //10

*/

/*

var teacher = "Kyle";


function ask(question) {
	console.log(teacher,question);
}

function otherClass() {
	var teacher = "Anwar";

	ask("Why?");
}

otherClass();

*/

var str1 = "Hello";


console.log(str1);

var str1 = "Anwar";
console.log(str1);


function outer() {
	a = 10;
	function inner(){
		a++;
		console.log(a);

	}
	return inner();
}

console.log(outer());

