/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(first, second) {
    this.firstNumber = first;
    this.secondNumber = second;
    this.sum = function () {
        return this.firstNumber + this.secondNumber
    };
    
    this.subtraction = function () {
        return this.firstNumber - this.secondNumber
    };

    this.multiplication = function () {
        return this.firstNumber * this.secondNumber
    };

    this.division = function () {
        return this.firstNumber / this.secondNumber
    };
}

