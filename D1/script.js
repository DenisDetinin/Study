"use strict";
alert("Привет мир")
let Cl1 = prompt('Введите 1 число ');
let a = prompt('введите операцию');
let cl2 = prompt('введите число 2');
let b = confirm('Действительно ли вы хотите выполнить данную операцию');
if (a !== "" && !isNaN(Cl1) && !isNaN(cl2)) {
    if (b) {

        if (a == "+") {
            alert(+Cl1 + +cl2);
        }

        if (a == "-") {
            alert(+Cl1 - +cl2);
        }

        if (a == "*");
        {
            alert(+Cl1 * +cl2);
        }

        if (a == "/") {
            alert(+Cl1 / cl2);
        }
    } else {
        alert('нет')
    }
} else {
    alert('Ошибка')
}