
    function riddle(question, answer) {
        var userAnswer = prompt(question);
        userAnswer = userAnswer.toLowerCase();
        
        for (var i = 0; i < answer.length; i++){
            
            if (userAnswer == answer[i]){
            rightAnswerCount++;
            alert("Правильно! Правильных ответов: " + rightAnswerCount);
               return;
            }       
        }
        
        alert("К сожалению, это не верный ответ! Правильных ответов: " + rightAnswerCount);
        
    }    
    var rightAnswerCount = 0;

    var userAnswer1 = "Отгадай загадку: \n\n Его летом не бывает, \n Но зимой порой мешает \n Щиплет щёчки щиплет нос, \n Озорной такой... ";
    riddle(userAnswer1, "мороз");

    var userAnswer2 = "Отгадай загадку: \n\nЕсть в линейку или в клетку,\nВ школе пишут в них все детки,\nЧтоб задачки в ней решать,\nЯ куплю себе...";
    riddle(userAnswer2, "тетрадь");

    var userAnswer3 = "Отгадай загадку: \n\nВ школу нам идти не надо,\nПапа рядом, вот награда,\nМама тоже отдыхает,\nС этим днем всех поздравляет,\nДела отбросим все долой,\nВедь сегодня...";
    riddle(userAnswer3, "выходной");

    var userAnswer4 = "А вот загадка немного по-сложнее, хорошенько подумай: \n\nОни рядышком живут,\nСловно, близнецы похожи.\nНо, друг друга рассмотреть\nТолько зеркало поможет.";
    riddle(userAnswer4,["глаза", "зрачки"]);

