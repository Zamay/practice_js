// /**
//  * Created by mitya on 20.05.17.
//  */
//
// //0bj_2
//
// function startNode(type, value, options) {
//     return {
//         type,
//         value,
//         options
//
//     }
// }
//
// console.log(startNode("Identifier", "foo", {
//     sourceProperty: "src",
//     sourceValue: "bar.js"
// }))
// // → {type: "Identifier",
// //    value: "foo",
// //    src: "bar.js"}
//
// // Obj 3
//
// var ids = {
//     next: 0,
//     get() {
//         return ids.next++;
//     }
// }
//
// console.log(ids.get())
// // → 0
// console.log(ids.get())
// // → 1
//
// //Block score 1
// var callbacks = []
// for (let i = 0; i < 10; i++) {
//     callbacks.push(function() { console.log(i) })
// }
//
// callbacks[2]()
//
// //Block score 2
// const account = {
//     username: "marijn",
//     password: "xyzzy"
//
// }
// Object.defineProperty(account, "password", {
//     writable: false
// });
//
// account.password = "s3cret" // (*much* more secure)
//
// console.log(account.password);
//
// //Block score 3
// class Something {}
// let s = new Something() //Вызов класса происходит раньше, чем обьявление его.
//
// // Arraw functions 1
//
// const inventory = [
//     {type:   "machine", value: 5000},
//     {type:   "machine", value:  650},
//     {type:      "duck", value:   10},
//     {type: "furniture", value: 1200},
//     {type:   "machine", value:   77}
// ];
//
// let totalMachineValue = inventory.reduce(function (prev, curr, i) {
//     return (curr.type == 'machine')? prev += curr.value : prev += 0 ;
// }, 0);
//
// console.log(totalMachineValue);
//
// // Arraw functions 2
//
// // Arraw functions 3
// console.log([1, 2, 3].reduce((x, y) => x + y, 0)) //

