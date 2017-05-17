/**
 * Created by zamaj on 16.05.2017.
 *
 *  7? , 15
 */

// 1

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
console.log(Object.keys(student)) //самый простой способ.
// /------------ мой -------/
function foo1(obj) {
    // let arr = []
    // for (let key in obj){
    //     arr.push(key);
    // }
    // return (arr);

    // Не мой код
    return Object.getOwnPropertyNames(obj);


}

console.log(foo1(student));

// 2

var student =  {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
console.log(student);
delete student.rollno;
console.log(student);

// /---------------------------/
function remvoveProp(object, property) {
    console.log(object);
    delete object[property];
    console.log(object);
}

remvoveProp(student, 'rollno');

// 3

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

function lengthObj(obj) {
    let size = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var size = lengthObj(student);
console.log(size)

// 4

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

for (let key of library){
    if (key.readingStatus){
        console.log(`Вы читаете ${key.author}`)
    } else {
        console.log(`Вы не читали ${key.author}`)
    }
}

// 6

function BubbleSort(A)
{
    debugger

    var n = A.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-1-i; j++) {
            if (A[j+1] < A[j]) {
                var t = A[j+1]; A[j+1] = A[j]; A[j] = t; }
            }
        }
    return A;
}
console.log(BubbleSort([3,6,1,4,7,2,5,8,1]))
// /-------------------------------/
function bubbleSort(array) {
    return array.sort(function(a, b){
        return a - b;
    });
}

// 7

// ...

// 8

function Setinterval() {
    this.times = function (){
        setInterval(function() {
            var d = new Date();
            var dat =d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
            console.log( dat +" \n" );
        }, 1000);
    };

}
var date = new Setinterval();
console.log(date.times());

// 9

function Calculate(){
    this.perimeter = function(r){
        return 2 * 3.14 * r ;
    };
    this.area = function(r) {
        return Math.PI * r * r ;
    }
}

let a  = new Calculate();

console.log(a.perimeter(4));
console.log(a.area(4));

// 10

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

function SortObject() {
    this.sortObj = function (arr) {
        for (let obj of arr) {
            Object.keys(obj).sort();
        }
        return arr
    }
}
let user = new SortObject();

console.log( user.sortObj(library) )

// /-------------- Аналог ------------------------/
console.log(library.sort());

// 11 Запомнил, что эсть такой метод

function all_properties(obj)
{
    return Object.getOwnPropertyNames(obj);
}

// 12

function parse_url(url){
    let objParams;

    var a = document.createElement('a');
    a.href = url;

    objParams = {
        href: a.href,
        protocol: a.protocol,
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname,
        search: a.search,
        hash: a.hash
    };

    for(let key in objParams) {
        if(objParams[key] == undefined) {
            objParams[key] = '';
        }
    }

    return objParams;
}

// 13

function Proto(name) {
    this.name = name;

    this.arr = function(){
        let arr = [];
        for (let key in user) arr.push(key);
        // for (let key in user.__proto__) {arr.push(key)}
        return arr;
    }
}

Proto.prototype.age = 23;
Proto.prototype.age2 = 23;
Proto.prototype.age3 = 23;

let user = new Proto("Misha");

console.log( user.arr());

// 14

let arr = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
};


function RetValue() {
    this.valueObj = function (obj) {
        let arr = [];
        for (let key in obj) arr.push(obj[key]);
        return arr;
    }
}

let user = new RetValue();
console.log( user.valueObj(arr))

// 15

// 16

function Foo16() {
    this.valueObj = function (obj) {
        let arr = {};
        for (let key in obj) {
            arr[ (obj[key]) ] = key;
        }
        return arr;
    }
}

let a = new Foo16();
console.log( a.valueObj(arr) );

// 17

function hasKey(obj, key) {
    return obj != null && obj.hasOwnProperty(key);
}

console.log( hasKey(arr, 'red'));

// 18

function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
}
console.log(is_dom_element(jQuery('body')[0]));
