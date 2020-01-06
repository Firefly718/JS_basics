(function() {
    'use strict';

    /* First tast */

    // let num = Math.random(); /* generate any number from 0 to 1 (for example: 0.1829249287) */

    // let num = Math.random() * 6; /* generate a number from 1 to 6 (for example: 2.2294214857) */

    // let num1 = Math.ceil(Math.random() * 6); /* generate a whole(integer) number (for example: 2 )*/
    // let num2 = Math.ceil(Math.random() * 6); /* generate the second number*/

    // document.write(`${num1} : ${num2}`); /* output in browser numbers */

    // document.write(`${genRand()} : ${genRand()}`); 

    // function genRand() {
    //     return Math.ceil(Math.random() *6);
    // }






    /* Second task */
    // document.write(`${genRand(1, 6)} : ${genRand(1, 6)}`);
    // document.write(`<br>`);

    // document.write(`${genRand(0, 1)}`);
    // document.write(`<br>`);

    // function genRand(min, max) {
    //     return Math.round(Math.random() * (max - min) + min);
    // }






    /* Task 3 */
    // let userNum = null;

    // do {
    //     userNum = +prompt(`Enter a number:`);
    // } while (isNaN(userNum));

    // document.write(`${genRand(1, userNum)}`);
    // document.write(`<br>`);

    // function genRand(min, max) {
    //     return Math.round(Math.random() * (max - min) + min);
    // }


    /* Task 4 */

    
    if (false) /* the another way to unworking code*/ {
        let userNum = null,
            userNumMax = null;
    
        do {
            userNum = +prompt(`Enter min number:`);
        } while (isNaN(userNum));
    
        do {
            userNumMax = +prompt(`Enter max number:`);
        } while (isNaN(userNumMax));
    
        document.write(`${genRand(userNum, userNumMax)}`);
        document.write(`<br>`);
    
        function genRand(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }
    }


    // /* Task 5*/
    // let answer = prompt(`Каково "оф." название "ДжаваСкрипт"?`);

    // if (!answer || answer.toLowerCase() != 'ECMAScript' .toLowerCase()) {
    //     document.write('Do you don\'t know? "ECMAScript!"');
    // } else {
    //     document.write('That is true!');
    // }

    /* Task 6 */

    // let userNum1 = null,
    //     userNum2 = null;

    //     do {
    //         userNum1 = +prompt(`Enter the first number`);
    //     } while (isNaN(userNum1));
    
    //     do {
    //         userNum2 = +prompt(`Enter the second number:`);
    //     } while (isNaN(userNum2));
    
    //     if (userNum1 > userNum2) {
    //         document.write(userNum1);
    //     } else {
    //         document.write(userNum2);
    //         document.write(`<br>`);
    //     }

    //     document.write( (userNum1 + userNum2)/2);



    /* Task 7 (work with symbols)*/

    let userWord1 = null,
        userWord2 = null;

        userWord1 = prompt(`Enter the first word`);

        userWord2 = prompt(`Enter the second word`);

        if (userWord1>userWord2) {
            document.write(userWord1);
        } else {
            document.write(userWord2);
            document.write(`<br>`);
        }


})();