
    var deposit = +prompt('Введите сумму вашего вклада:');
    var percent = +prompt('Введите годовую ставку:');
    var yearCount = +prompt('На сколько лет хотите рассчитать вклад?')
        
    percent = percent / 100;

    var result = 'Ваша сумма по вкладу на каждый год:\n'

    for (var year = 1; year <= yearCount; year++) {
        deposit = deposit + (deposit * percent);
        result += year + ' год ' + deposit.toFixed(2) + ' рублей\n';
    }
    
    alert(result);
