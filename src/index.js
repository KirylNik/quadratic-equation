module.exports = function solveEquation(equation) {

    let aPosition = equation.indexOf(' * x^2 '); //Получить позицию конца А
    let a = +equation.substring(0, aPosition);  //Получить А как строку
    let bPosition = equation.indexOf(' * x ');   //Получить позицию конца B
    let b = equation.substring(aPosition + 7, bPosition);  //Получить B как строку
    let c = equation.substring(bPosition + 5);    //Получить С как строку

    if (b[0] == '-') {            // Преобразование B из строки в число с учётом знака
        b = -b.substring(2)
    } else {
        b = +b.substring(2)
    };

    if (c[0] == '-') {           // Преобразование C из строки в число с учётом знака
        c= -c.substring(2)
    } else {
        c = +c.substring(2)
    };

    let desc = (b * b) - (4 * a * c);
    let b1 = (-b + Math.sqrt(desc)) / (2 * a);
    let b2 = (-b - Math.sqrt(desc)) / (2 * a);

    let result = [Math.round(b1), Math.round(b2)];

    result.sort(compareNumeric);  //Сортитовка
    function compareNumeric(a, b) {
        return a - b;
    };

    return (result);
};