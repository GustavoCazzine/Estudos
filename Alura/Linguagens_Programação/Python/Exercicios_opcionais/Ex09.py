number = int(input('Numero: '))

if number > 1:
    for i in range(2, int(number**0.5) + 1):
        if (number % i) == 0:
            print(number, 'não é primo')
            break
    else:
        print(number, 'é primo')
elif number == 1:
    print(number, 'não é primo (o único divisor é ele mesmo)')
elif number == 0:
    print(number, 'é zero')
else:
    print(number, 'é negativo')
