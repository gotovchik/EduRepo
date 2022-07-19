# переменные, ввод и вывод

print('Введите a')
a = int(input())
print('Введите b')
b = int(input())

# Арифметические операции: +,-,*,/,%,//,** 

c = a + b
d = a / b
e = a ** b
f = a - b

print(c, d, e, f)

# Логические операции: >, >=, <=, ==, !=,
#                      not, and, or, is, is not, in, not in

func = 1
T = 4
x = 224
print(func<T>(x))

f = 1 > 2 or 4 < 6 #дизъюнкция 
print(f)

# Управляющие конструкции: 
# if, if - else, elif

y = int(input())
u = int(input())

if y > u:
	print(y)
else:
	print(u)

# while-else

original = 23
inverted = 0
while original != 0:
	inverted = inverted * 10 +(original % 10)
	original //= 10
else:
	print('Пожалуй хватит )')
print(inverted)

# for 

list = [1,2,3,4,5]
for i in list:
	print(i)


# Функции

def f(h):
	if h == 1:
		return 'целое'
	elif h == 2.3:
		return 23
	else:
		return

arg = 4
print(f(arg))
print(type(f(arg)))






