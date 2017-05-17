/**
 * Created by zamaj on 12.05.2017.
 */
Hamburger.SIZE_BIG = "BIG";
Hamburger.SIZE_SMALL = "SMALL";

Hamburger.STUFFING_CHEESE = "CHEESE";
Hamburger.STUFFING_SALAD = "SALAD";
Hamburger.STUFFING_POTATOES = "POTATOES";

Hamburger.TOPPING_SAUCE = "SAUCE";
Hamburger.TOPPING_MAYO = "MAYO";

function Hamburger(size, stuffing) {

    this.toppingsArr = {
        toppingSause: 0,
        toppingMayo: 0
    };
    this.size = size;
    this.stuffing = stuffing;

    this.validateSize = function () {
        if (this.size != Hamburger.SIZE_BIG &&
            this.size != Hamburger.SIZE_SMALL) {
            throw new Error( this.size + " - неправильный размер" );
        }
    };

    this.validateStuffing = function () {
        if (stuffing != Hamburger.STUFFING_CHEESE &&
            stuffing != Hamburger.STUFFING_SALAD &&
            stuffing != Hamburger.STUFFING_POTATOES) {
            throw new Error( this.stuffing + " - неправильная начинка" );
        }
    }
}

Hamburger.prototype.addTopping = function (topping) {

    if (topping == Hamburger.TOPPING_SAUCE) {
        this.toppingsArr.toppingSause++;
    }
    if (topping == Hamburger.TOPPING_MAYO) {
        this.toppingsArr.toppingMayo++;
    }
    if (this.toppingsArr.toppingSause >= 2) {
        this.toppingsArr.toppingSause = 1;
        throw new Error("Приправа добавлена более 1 раза");
    }
    if (this.toppingsArr.toppingMayo >= 2) {
        this.toppingsArr.toppingMayo = 1;
        throw new Error("Майонезом полито более 1 раза");
    }
    if (topping != Hamburger.TOPPING_SAUCE &&
        topping != Hamburger.TOPPING_MAYO) {
        throw new Error( this.topping + " - неизвестная добавка");
    }
}

Hamburger.prototype.calculateCalories = function () {

    var calories = 0;
    if (this.size == Hamburger.SIZE_BIG) {
        calories += 40;
    }
    if (this.size == Hamburger.SIZE_SMALL) {
        calories += 20;
    }
    if (this.stuffing == Hamburger.STUFFING_CHEESE) {
        calories += 20;
    }
    if (this.stuffing == Hamburger.STUFFING_SALAD) {
        calories += 5;
    }
    if (this.stuffing == Hamburger.STUFFING_POTATOES) {
        calories += 10;
    }
    if (this.toppingsArr.toppingSause == 1) {
        calories += 0;
    }
    if (this.toppingsArr.toppingMayo == 1) {
        calories += 5;
    }
    return calories;
}

Hamburger.prototype.calculatePrice = function () {

    var price = 0;
    if (this.size == Hamburger.SIZE_BIG) {
        price += 100;
    }
    if (this.size == Hamburger.SIZE_SMALL) {
        price += 50;
    }
    if (this.stuffing == Hamburger.STUFFING_CHEESE) {
        price += 10;
    }
    if (this.stuffing == Hamburger.STUFFING_SALAD) {
        price += 20;
    }
    if (this.stuffing == Hamburger.STUFFING_POTATOES) {
        price += 15;
    }
    if (this.toppingsArr.toppingSause == 1) {
        price += 15;
    }
    if (this.toppingsArr.toppingMayo == 1) {
        price += 20;
    }
    return price;
}

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger)
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?
console.log("Price with sauce: %f", hamburger.calculatePrice());
console.log("Calories with sauce: %f", hamburger.calculateCalories());
hamburger.validateStuffing();
hamburger.validateSize();