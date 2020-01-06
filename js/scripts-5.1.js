(function(){
    'use strict';

    var salaries = {
        // "Vasya": 100,
        // "Petya": 300,
        // "Darya": 250
    };

    var sum = 0; name = null;

    for (var salary in salaries) {
        sum += salaries[salary];
    }

    console.log(sum);

    var max = 0, name = null, i = 0;

    for (var salary in salaries) {
        i++;
        if (max < salaries[salary]) {
            max = salaries[salary];
            name = salary;
        }
    }

    if (i == 0) {
        console.log('There is no staff in the company');
    } else {
        console.log(name + ' - ' + max);

    var min = max, nameMin = null;

    for (var salary in salaries) {
        if (min > salaries[salary]) {
            min = salaries[salary];
            nameMin = salary;
        }
    }

    console.log(nameMin + ' - ' + min);
    }

    
    

})();