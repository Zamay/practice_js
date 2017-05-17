/**
 * Created by zamaj on 12.05.2017.
 */
/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {'tug' : 50, 'calories' : 20};
Hamburger.SIZE_LARGE = {'tug' : 100   , 'calories' : 40};
Hamburger.STUFFING_CHEESE = {'tug' :  10  , 'calories' : 20};
Hamburger.STUFFING_SALAD = {'tug' :  20  , 'calories' : 5};
Hamburger.STUFFING_POTATO = {'tug' :  15  , 'calories' : 10};
Hamburger.TOPPING_MAYO = {'tug' :   15 , 'calories' : 0};
Hamburger.TOPPING_SPICE = {'tug' :   20 , 'calories' : 5};

function Hamburger(size, stuffing)  {
    this.tugAndCalor = {
        'tug'   : 0,
        'calor' : 0
    };

    //проверка size

    //проверка stuffing
}
/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping){
    if (topping == Hamburger.TOPPING_MAYO){
        this.tugAndCalor.tug += Hamburger.TOPPING_MAYO.tug;
        this.tugAndCalor.calor += Hamburger.TOPPING_MAYO.calories;
    }
    if (topping == Hamburger.TOPPING_SPICE){
        this.tugAndCalor.tug += Hamburger.TOPPING_SPICE.tug;
        this.tugAndCalor.calor += Hamburger.TOPPING_SPICE.calories;
    }
    if (topping != Hamburger.TOPPING_SPICE || (topping != Hamburger.TOPPING_MAYO.tug )){
        console.log("Ypss");
    }
};

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping){

}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {

}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function (){

}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function (){

}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function (){

}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function (){

}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException (error) { console.log(`HamburgerException : ${error}`) }

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1