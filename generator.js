/**
 * Created by zamaj on 08.05.2017.
 */
'use strict'

// №1
// function sequence(start, step) {
//     start = start || 0;
//     step = step || 1;
//     start -= step;
//     return function() {
//         return start += step;
//     }
// }
// var generator  = sequence(10, 3);
// console.log(generator());
// console.log(generator());
// console.log(generator());
//
// № 2
// var arr = [];
// function take(fn, count) {
//     for (let i = 0; i < count; i++){
//         arr[i] = fn();
//     }
//     return arr;
// }
//
// console.log(take(gen2, 5));
//
// № 3
// function map(fn, arr){
//     var narr = [];
//     for(var i=0; i<arr.length; ++i){
//         narr.push(fn(arr[i]))
//     }
//     return narr
// }
//
// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1,2,3,4])); // [1, 4, 9, 16]
//
// № 4


// № 5
// const partial  = (fn , ...args) => (...restArgs) => fn( ...args.concat(restArgs));

// №6 ---------

        function pluck (objects, fieldName){
            var arr = [];
            objects.forEach(
                function (obj) {
                    arr[1]
                    return arr;
                });
            console.log(arr)
        }
        pluck(characters, 'name')

// № 7
// function bind(fn, context) {
//     return function() { // (*)
//         return fn.apply(context, arguments);
//     };
// }

// № 8

// № 9
// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// function filter (arr, fn) {
//     var narr = [];
//     for(var i=0; i<arr.length; ++i){
//         if(fn(arr[i])){
//             narr.push((arr[i]))
//         }
//     }
//     return narr
// }
//
// console.log(filter(input, isEven)); // [2, 4, 6]

// № 10
//
// function count (obj) {
//
//     var counter = 0;
//
//     for (var key in obj) {
//         counter++;
//     }
//     return counter;
// }
