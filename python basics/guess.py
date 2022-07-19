import random

def guess_func(max_try, answer, user_answer):
    for i in range(1, max_try + 1):
     if user_answer == answer:
      print('Ты угадал(а). Правильное число ', answer)
      break
     elif user_answer > answer:
      print('Не верно! Я загадал число по-меньше.\nПопыток осталось ', max_try - i)
     elif user_answer < answer:
      print('Не верно! Я загадал число по-больше.\nПопыток осталось ', max_try - i)
     if i == max_try:
      print('Ты проиграл(а). Правильное число было:', answer, '\nПопытки закончились.')
      break

     print('Попробуй еще раз')
     user_answer = int(input())

print('Здраствуй! Меня зовут Загадочник и я загадал число от 1 до 100.\nПопробуй угадать его:)')

print('Начнем с простого. У тебя 10 попыток')
max_try1 = 10
answer1 = random.randint(1, 100)

print('Введи число')
user_answer1 = int(input())
guess_func(max_try1, answer1, user_answer1)

print('Продолжим... Я загадал новое число, но теперь у тебя 7 попыток')
max_try2 = 7
answer2 = random.randint(1, 100)

print('Введи число')
user_answer2 = int(input())
guess_func(max_try2, answer2, user_answer2)

print('Последнее число!\nМало кто отгадывал число за 5 попыток... но ты попробуй:)')
max_try3 = 5
answer3 = random.randint(1, 100)

print('Введи число')
user_answer3 = int(input())
guess_func(max_try3, answer3, user_answer3)	

print('Приятно было с тобой поиграть!\nПриходи еще. Всего хорошего!')
	