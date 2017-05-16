/**
 * Created by zamaj on 12.05.2017.
 *
 *  14 и с 19
 *
 */

// 1

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}

// 2 - решил

let a = 'qwerty a ytrewq'
let a1 = reverse_a_number(a)
if (a == a1){
    console.log('Ypa');
}

// 3 --------

function splitElements(arr) {
    let temp = [];

    for (let i = 1; i <= arr.length; i++) {
        const lettersToPush = arr.slice(0, i).join('');
        temp.push(lettersToPush);
    }

    return temp;
}

function displayString(str) {

    const strToArr = str.split('');
    const reversed = strToArr.slice().reverse();

    return splitElements(strToArr).concat(splitElements(reversed))

}
console.log(displayString('dog'));

// 4 - решил

function alphabet(str){
    return str.split('').sort().join('');
}
console.log(alphabet(str));

// 5

function longestFirstWord(str) {
    let arr = str.split(' ');
    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

console.log(longestFirstWord('qwertyu ewr ef ds e'));

// 6

function findLongestWord(str){
    return str.split(' ').sort((a, b) => (b.length - a.length))[0];
}
console.log(findLongestWord('qwewqewqewqe qw re reqw qsfdf fd df ds f qwerty'));

// 7 ---

function foo(str) {
    return str.match(/[ayuioe]/gi).length;
}
console.log(foo("The quick brown fox"));

// 8

function isPrime(n) {
    if (n >= 2) {

        for (var i = 2; i < n; i++) {
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(isPrime(25));

// 9

function type(str) {
    return Object.prototype.toString.call(str);
    // return Object.prototype.toString.apply(str);
}

// 10 ------------------

// 10000
// 01000
// 00100
// 00010
// 00001

// НЕмой

function identityMatrix(size){
    var r = new Array(size);
    for(var i = 0; i < size; i++){
        r[i] = new Array(size).fill(0);
        r[i][i] = 1;
    }
    return r;
}
console.log(identityMatrix(4))

// 11

// /-------------- Мой код --------------------/

function findSecondNum(arr){
    let arr1 = [];
    arr1.push(arr.sort((a, b) => (a - b)).slice(1, 2)[0]);
    arr1.push(arr.sort((a, b) => (a - b)).slice(-2, -1)[0]);

    return arr1;
}
console.log(findSecondNum([2,23,12,43,1,5,76]));

// /------------- Код с нета ------------------/

function findSecondNum1(arr){
    arr.sort((a, b) => (a - b));
    return (arr[1] + ", " + arr[(arr.length - 2)])
}
console.log(findSecondNum1([2,23,12,43,1,5,76]));

// 12

function perfectNum(num) {
    let sum = 0;
    if (num >= 1) {
        for (let i = num; i > 0; i--) {
            if (num % i === 0) {
                sum += i;
            }
        }
    }
    return ( sum/2 == num);
}
console.log(perfectNum(6));

// 13

// /-------------- Мой код --------------------/

function factor(num) {
    let arr = [];
    if (num >= 1) {
        for (let i = num; i > 0; i--) {
            if (num % i === 0) {
                arr.push(i)
            }
        }
    }
    return arr;
}

// /------------- Код с нета ------------------/


function foo(n) {
    let arr = [];
    for(let i = 0; i <= n ; i++) {
        n % i === 0? arr.push(i):arr ;
    }
    return arr;
}
console.log(foo(16));

// 14 --- не сделал.

// 15

function pow(b, p){
    return Math.pow(b,p);
}

// 16 Не работает через let str .

function uniqueValues(str) {

    let unique = " ";

    for (var i = 0; i < str.length; i++) {
        // if (!unique.includes(str[i])) {      // два варианта.
        if(unique.indexOf(str.charAt(i))==-1){
            unique += str[i];
        }
    }
    return unique;

}
console.log(uniqueValues('thequickbrownfoxjumpsoverthelazydog'));

// 17 --- не сделал.

function foo(str) {
    var str = str.toLowerCase();
    var obj = {};
    str.split("").map(function(sum) { obj[sum] = !obj[sum] ? 1 :obj[sum]+1});
    return obj;
}
console.log(foo("The quick brown fox jumps over the lazy dog"));

// 18 --- это решению лучше моего
// Я не так понял задание....

function BinarySearch(arr,t)
{
    var i = 0, len = arr.length, m;

    while (i < l) {
        mid = Math.floor((i+len)/2);
        if (t <= arr[mid]) len = m;
        else i = mid+1;
    }

    if (arr[i] === t) return i;
    else return -1;
}
console.log(BinarySearch([1,2,3,4,5,6,7],3));