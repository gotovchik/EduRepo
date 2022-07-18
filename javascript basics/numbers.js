
    function compareAnswers(userAnswer, answer){
      if(userAnswer == answer)
          alert('Верно, число действительно ' + answer + '!');
        else
          alert('Вы не угадали, на самом деле это было число ' + answer);
    }

    function getRandomNumber(n){
      return Math.round(Math.random() * n);
    }


    function generateRandomNumberArray(lenght){
      var arr = [];
      for(var i = 0; i < lenght; i++){
          var rand = getRandomNumber(100);
          arr.push(rand);
          }
      return arr;
    }

    var numbers = generateRandomNumberArray(5);

    alert('Запомните числа и их порядок: ' + numbers);

    var userAnswer = +prompt('Каким было первое число?');
    compareAnswers(userAnswer, numbers[0]);

    var userAnswer = +prompt('А последнее?');
    compareAnswers(userAnswer, numbers[ numbers.length - 1 ]);

    var n = getRandomNumber(numbers.length - 1);
    var userAnswer = +prompt('А каким было число под номером ' + (n + 1) + '?');
    compareAnswers(userAnswer, numbers[n]);

