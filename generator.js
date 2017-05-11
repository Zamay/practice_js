/**
 * Created by zamaj on 08.05.2017.
 */

'use strict'

// №1
function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    start -= step;
    return function() {
        return start += step;
    }
}
var generator  = sequence(10, 3);
console.log(generator());
console.log(generator());
console.log(generator());

// № 2

var arr = [];
function take(fn, count) {
    for (let i = 0; i < count; i++){
        arr[i] = fn();
    }
    return arr;
}

console.log(take(gen2, 5));

// № 3

function map(fn, arr){
    var narr = [];
    for(var i=0; i<arr.length; ++i){
        narr.push(fn(arr[i]))
    }
    return narr
}

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1,2,3,4])); // [1, 4, 9, 16]

// № 4

var fmap=(a, gen)=>(x,...args)=>a(gen(x,...args))

// ИЛИ

function fmap(a, gen) {
    return function (x, ...args) {
        return a(gen(x, ...args));
    }
}

function add(a, b) {
    return a + b;
}
function square(x) {
    return x * x;
}

var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3))

// № 5

const partial  = (fn , ...args) => (...restArgs) => fn( ...args.concat(restArgs));

// №6 


function partialAny(func, ...args) {
    let args = Array.from(arguments);
    args.splice(0, 1);
    return function () {
        let arrInside = Array.from(arguments);

        for (let i = 0; i < args.length; i++) {
            if (args[i] === undefined) {
                args[i] = arrInside.shift();
            }
        }
        args = args.concat(arrInside);
        return func.apply(this, args);
    }
}

function test(...args) {
    return args;

}

var test1_3 = partialAny(test, 1, undefined, 3, 88, undefined);
console.log(test1_3(57, 15, 33, 24, 34));

var test1_5 = partialAny(test, 66, undefined, 3, undefined, undefined);
console.log(test1_5(10, 55, 33));

// № 7

function bind(fn, context) {
    return function() { // (*)
        return fn.apply(context, arguments);
    };
}

// № 8

let user = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function pluck(objects, fieldName) {
    let arr = [];
    for (let obj of objects){
        arr.push(obj[fieldName]);
        console.log(arr);
    }
    return arr;
}
pluck(user, 'name');

// № 9

var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
function filter (arr, fn) {
    var narr = [];
    for(var i=0; i<arr.length; ++i){
        if(fn(arr[i])){
            narr.push((arr[i]))
        }
    }
    return narr
}

console.log(filter(input, isEven)); // [2, 4, 6]

// № 10

function count (obj) {
    var counter = 0;
    for (var key in obj) {
        counter++;
    }
    return counter;
}

