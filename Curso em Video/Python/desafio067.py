#Faça um programa que mostre a tabuada de vários números, um de cada vez, para cada valor digitado pelo usuário. O programa será interrompido quando o número solicitado for negativo.

while True:
    print('-'*30)
    num = int(input('Quer ver a tabuada de qual valor (digite um valor negativo para sair): '))
    print('-'*30)
    if num < 0:
        print('-' * 30)
        print('PROGRAMA TABUADA ENCERRADO. Volte sempre!')
        print('-' * 30)
        break
    else:
        for c in range(1 ,11):
            print(f'{num} X {c} = {num * c}')



