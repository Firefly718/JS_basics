(function() {
    'use strict';

    var names = [
        'Sasha',
        'Max',
        'Sergey',
        'Anton',
        'Bohdan',
        'Kate',
        'Serj',
        'Alex',
        'Sanya',
        'Oleg',
        'Artur',
        'Valya'
    ];

    // for (var i /* itterator */= 0; i < names.length; i++ ){
    //     console.log(names[i]);
    // }

    // var firstLetter = 'A';

    // for (var i /* itterator */ = names.length -1; i >= 0; i-- ) {
    //     // if (names[i].charAt(0) == 'A') {
    //     //     console.log(names[i]);
    //     // }

    //     if (names[i].toLowerCase().indexOf('a') >=0) {
    //         console.log(names[i]);
    //     }
    // }

    for (var i = 0; i < names.length; i++) {
        console.log (names[i].charAt(0));
    }


    var str = names.join('*');
    console.log(str);

    console.log(str.split('*'));

    console.log(names.indexOf('Bohdan'));

    

})()