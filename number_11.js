/**
 * Created by zamaj on 11.05.2017.
 */

var jsonFile = new XMLHttpRequest();
jsonFile.open('GET', 'https://gist.githubusercontent.com/fayvlad/f89533efa1376468fcfd61f7ec3f544e/raw/e587cbbb2229c2e81f2d77a4be119f80dd52f024/task%2520%252311%2520js', false);
jsonFile.send();
var data = JSON.parse(jsonFile.responseText);

    // data.sort(function (a, b) {  // так или ...
let sortArr = data.sort(function (a, b) {
    var popA = a.population, popB = b.population;
    return (popA > popB) ? -1 : 1;
});

let num = prompt("Введите значение до 99")

let i = 0;
for (let arr of sortArr){
    if (i < num){
        console.log(arr);
        i++;
    }
}

