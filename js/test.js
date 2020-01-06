(function() {
    'use strict';

    var questions = [
        {text: 'Are you Ok?',
        answers: ['a. YES', 'b. NO', 'c. So-so'],
        answer: 'a'},

        {text: 'Do u like listen to music?',
        answers: ['a. YES', 'b. NO', 'c. So-so'],
        answer: 'b'},

        {text: 'Do u like this test?',
        answers: ['a. YES', 'b. NO', 'c. So-so'],
        answer: 'c'}
    ];

    var rightAns = 0,
        rights = [],
        wrongs = [];

    for (var key in questions) {
        var question = questions[key];
        var variants = question.answers.join('\n');
        var userAnswer = prompt(question.text + '\n' + variants);
        if (userAnswer == question.answer) {
            rights.push(question.text);
            questions[key].type = 'right';
            rightAns++;
        } else {
            wrongs.push(`${question.text}<br>
            <small>Правильный ответ: ${question.answer}</small>
            `);
            questions[key].type = 'wrong';
        }
    }

    console.log(wrongs);
    console.log(rights);

    // alert(`You got ${rightAns} question(s) right from ${questions.length}`);

    var h1 = document.createElement('h1');
    h1.innerText = `You got ${rightAns} question(s) right from ${questions.length}`;

    // console.log(h1);


    var container = document.querySelector('.container');


    document.querySelector('.container').appendChild(h1);
    var ul = document.createElement('ul');
        container.appendChild(ul);



    for (var key in questions) {
        var li = document.createElement('li');
        li.innerHTML = questions[key].text;
        li.classList.add(questions[key].type);
        ul.appendChild(li);
    }

    var ulRight = document.createElement('ul'),
        ulWrong = document.createElement('ul');

    ulRight.classList.add('right');
    ulWrong.classList.add('wrong');

    console.log(ulRight);
    console.log(ulWrong);

    for (var key in wrongs) {
        var text = wrongs[key],
            li = document.createElement('li');

        li.innerHTML = text;
        ulWrong.appendChild(li);
    }

    showResults('right', rights);
    showResults('wrong', wrongs);

    function showResults(style, answers) {

        var target = document.createElement('ul');

        target.classList.add(style);
        container.appendChild(target);

        for (var key in answers) {
            var text = answers[key],
                li = document.createElement('li');
    
            li.innerHTML = text;
            target.appendChild(li);
        }
    }





})();