
  function getRandomNumber(n){ //получаем рандомное число
          return Math.round(Math.random() * n);
          }

  function generateNumberArray(lenght){  //Набор массива из n элементов
      var arr = [];
      for (var i = 0; i < lenght; i++){
        arr.push(i);
      }
      return arr;
    }

  function sum(array){  //Суммируем все элементы массива
    var sum = 0
    for(var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  }

  function max(array){ //Находим максимальное значение массива
    var max = array[0];
    for(var i = 0; i < array.length; i++){
      if(array[i] > max)
        max = array[i];
    }
    return max;
  }

  function min(array){ //Находим минимальное значение массива
    var min = array[0];
    for(var i = 0; i < array.length; i++){
      if(array[i] < min)
        min = array[i];
  }
  return min;
  }

  function getEvenNumbers(array){ //выбираем все четные числа из массива
    var even = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 == 0)
        even.push(array[i]);
    }
    return even;
  }

  function getOddNumbers(array){ //выбираем все нечетные числа из массива
    var even = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 == 1)
        even.push(array[i]);
    }
    return even;
  }

  function generateRandomNumberArray(lenght){ //создание массива рандомных чисел
      var arr = [];
      for(var i = 0; i < lenght; i++){
          var rand = getRandomNumber(n); // под n ставим число до которого рандомим
          arr.push(rand);
          }
      return arr;
    }
