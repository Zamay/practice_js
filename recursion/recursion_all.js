/**
 * Created by zamaj on 15.05.2017.
 *
 *  Не сделал 6 и 8 задачу.
 *
 */

// 1

function factorial(x) {
    return (x === 0)? 1 : x *  factorial(--x);
}
console.log(factorial(5));

// 2  ----

var gcd = function(a, b) {
    debugger
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 378));

// 3

let arr = [];
function range(start, end) {

    if (start < end - 1){
        arr.push(start + 1);
        range(start+1, end)
    }

    return arr;
}
console.log(range(2, 4));

// /-------------- ---------------------/
function recur(x,y) {
    return x==y-2 ? y-1 : [x+1].concat(recur(x+1,y));
}
console.log(recur(2,9));

// 4

let sum = 0;
function sumArray (arr) {

    if (arr.length == 0){
        return -1;
    }else {
        sum += arr.shift();
    }
    sumArray (arr);
    return sum;
}
console.log(sumArray ([1,2,3,4,5,6]))

// /---------------------- -------------------/

function recur(x) {
    return x.length == 1 ? x[0] : x[0] + recur(x.slice(1))
}
console.log(recur([1, 2, 3, 4, 5, 6]));

// 5

function exp(a, n){
    return n > 1 ? a * exp(a, n-1) : a;
}
console.log(exp(3, 3));

// 6 -----

// 7

function foo(num) {
    return (num % 2 === 0)? true : false;
}

// 8 ----

// 9

function sort(arr) {
    return arr.sort(function(a, b){
        return a - b;
    })
}

console.log( sort([34,7,23,32,5,62]))