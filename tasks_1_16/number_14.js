/**
 * Created by zamaj on 11.05.2017.
 */



function typeVar(types){
    var toString = Object.prototype.toString;
    let type = toString.call(types);
    switch(type){
        case '[object Object]':   if(type.length == undefined)  console.log('object'); console.log('array-like');     break;
        case '[object Function]':   console.log('function');    break;
        case '[object Array]':      console.log('array');       break;
        case '[object Boolean]':    console.log('boolean');     break;
        case '[object Number]':     console.log('number');      break;
        case '[object String]':     console.log('string');      break;
        case '[object Undefined]':  console.log('undefined');   break;
        case '[object Null]':       console.log('null');        break;
    }
}

let x = { length: 2, 0: 'a', 1: 'b', hello: 'world'}
let y = { 'name' : 'dsad', 'qwew' : 21};
