
    var words = [
        ['стул', 'chair'],
        ['стол', 'table'],
        ['вилка', 'fork'],
        ['чашка', 'cup'],
        ['блюдо', 'dish'],
    ];

    while(words.lenght != 0){
        var i = parseInt(Math.random() * words.length);
        var userTranslate = prompt('Как переводиться слово: ' + words[i][0]);
        if(userTranslate == words[i][1]){
            alert('Правильно!');
            words.splice(i, 1);
        } else {
            alert('Правильный ответ: ' + words[i][1]);
        }
    }  
    
    alert('Поздравляем! Вы запомнили все слова!');
