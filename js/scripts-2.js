(function() {
    'use strict';

    let num1, num2;

    do {
        num1 = +prompt('Enter first number');
    } while (isNaN(num1));

    document.write(`<p>${num1}</p>`);
    
    do {
        num2 = +prompt('Enter second number');
    } while (isNaN(num2));

    document.write(`<p>${num2}</p>`);

    document.write(`==================================================================`);

    document.write(`<p>${num2 + num1}</p>`);  /*variation 1*/
    // document.write('<p>' + (num2 + num1) + '</p>');  /*variation 2*/
})();