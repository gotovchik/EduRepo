from random import randint

def guess_func(max_try, answer, user_answer):
    for i in range(1, max_try + 1):
     if user_answer == answer:
      print(f'Ты угадал(а). Правильное число {answer}')
      break
     elif user_answer > answer:
      print(f'Не верно! Я загадал число по-меньше.\nПопыток осталось {max_try - i}')
     elif user_answer < answer:
      print(f'Не верно! Я загадал число по-больше.\nПопыток осталось {max_try - i}')
     if i == max_try:
      print('Ты проиграл(а). Правильное число было:{answer} \nПопытки закончились.')
      break

     print('Попробуй еще раз')
     user_answer = int(input())



""" def guess_func(max_try, answer, user_answer):           не доработанная функция
    while max_try != 0:
        while user_answer != answer:
            if user_answer > answer:
                max_try -= 1
                print(f'Не верно! Я загадал число по-меньше.\nПопыток осталось  {max_try}')
            elif user_answer < answer:
                max_try -= 1
                print(f'Не верно! Я загадал число по-больше.\nПопыток осталось {max_try}') 
        else:
            print(f'Ты угадал(а). Правильное число {answer}')
    else: """
                    
    





print('Здравствуй! Меня зовут Загадочник и я загадал число от 1 до 100.\nПопробуй угадать его:)')

print('Начнем с простого. У тебя 10 попыток')
print('Введи число')
user_answer1 = int(input())
max_try1 = 10
answer1 = randint(1, 100)
guess_func(max_try1, answer1, user_answer1)

print('Продолжим... Я загадал новое число, но теперь у тебя 7 попыток')
print('Введи число')
user_answer2 = int(input())
max_try2 = 7
answer2 = randint(1, 100)
guess_func(max_try2, answer2, user_answer2)

print('Последнее число!\nМало кто отгадывал число за 5 попыток... но ты попробуй:)')
print('Введи число')
user_answer3 = int(input())
max_try3 = 5
answer3 = randint(1, 100)
guess_func(max_try3, answer3, user_answer3)	

print('Приятно было с тобой поиграть!\nПриходи еще. Всего хорошего!')
	