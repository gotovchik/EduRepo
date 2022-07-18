
    function generateText(letters, length){
        
        var text = "";
        for(var i = 0; i < length; i++){
            var n = getRandomNumber(letters.length - 1);
            text = text + letters[n];
        }
        
        return text;      
    }

    function getRandomNumber(n){
        return Math.round(Math.random() * n);
        }

    function blindPrinting(brief, letters, length){
        while(true){
            alert(brief);

            var text = generateText(letters, length);
            var userText = prompt(text);
            if(userText == text){
                alert('Все верно!');
                break;    
            } else {
                alert('Вы ошиблись. Попробуйте еще раз');
            }
        }    
    }

    alert('Вас приветсвует программа по обучению слепой печати');

   
    var brief = ('Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж, безымянный палец — на Д, средний — на Л, указательный — на О. Запомните расположение пальцев. Повторяйте за мной');
    blindPrinting(brief, ['ф', 'а'], 10);


    brief = ('Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж, безымянный палец — на Д, средний — на Л, указательный — на О. Запомните расположение пальцев. Повторяйте за мной');
    blindPrinting(brief, ['ы', 'в'], 15);

  
    brief = ('Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж, безымянный палец — на Д, средний -— на Л, указательный — на О. Запомните расположение пальцев');
    blindPrinting(brief, ['о', 'ж'], 20);