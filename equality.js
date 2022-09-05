console.log("Equality");

var trendRate = -0;
console.log(trendRate === -0);
console.log(trendRate.toString());
console.log(trendRate === 0);
console.log(trendRate < 0);
console.log(trendRate > 0);

console.log(Object.is(trendRate,-0));

console.log(Object.is(42,42)===true);
console.log(Object.is("foo","foo")===true);
console.log(Object.is(false,false)===true);
console.log(Object.is(null,null)===true);
console.log(Object.is(undefined,undefined)===true);
console.log(Object.is(NaN,NaN)===true);
console.log(Object.is(-0,-0)===true);
console.log(Object.is(0,0)===true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);












function formatTrend(trendRate){
    var direction = (trendRate < 0 || Object.is(trendRate,0)) ? "▼" : "▲";
    return `${direction} ${Math.abs(trendRate)}`;
}

// console.log(formatTrend(-1));