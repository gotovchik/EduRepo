
	var answer = parseInt(Math.random() * 100);
	var userAnswer1 = +prompt("Я загадал число от 1 до 100. Попробуйте угадать его");
	var maxTryCount = 7;

	for(var tryCount = 1; tryCount <= maxTryCount; tryCount++){
		if(userAnswer == answer){
			alert("Вы угадали. Правильное число " + answer);
			break;
		}	else if(userAnswer > answer){
				alert("Вы ввели слишком большое число. Осталось попыток: " + (maxTryCount - tryCount));
		} 	else if(userAnswer < answer){
				alert("Вы ввeли слишком маленькое число. Осталось попыток: " + (maxTryCount - tryCount));
		}

		if(tryCount == maxTryCount){
			alert("Попытки закончились. Вы проиграли. Правильный ответ был: " + answer);
			break;
		}

		userAnswer = +prompt("Попробуйте еще раз. Введите число от 1 до 100");
	}

