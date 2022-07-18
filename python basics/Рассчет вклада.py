print('Введите сумму вашего вклада:')
deposit = int(input())
print('Введите годовую ставку:')
percent = int(input())
print('На сколько лет хотите рассчитать вклад?')
yearCount = int(input())


for year in range(1, yearCount+1):
	deposit = deposit + (deposit * percent / 100)	
	print('Ваша сумма по вкладу на ',year, ' год(а)/лет: ', round(deposit), 'рублей')



