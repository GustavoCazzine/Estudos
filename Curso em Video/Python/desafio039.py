#Faça um programa que leia o ano de nascimento de um jovem e informe, de acordo com a sua idade: -Se ele ainda vai se alistar ao serviço militar / -Se é a hora de se alistar /-Se já passou do tempo do alistamento.
#Seu programa também deverá mostrar o tempo que falta ou que passou do prazo.

#Entrada de dados - idade
idade = int(input('Digite sua idade: '))
anos = ''
if idade == 18:
    print('Está na hora de você se alistar ao serviço militar, é obrigatório!')
elif idade < 18:
    anos = 18 - idade
    print(f'Você ainda é jovem, mas em {anos} anos, deverá se alistar ao serviço militar, não se esqueça.')
else:
    anos = idade - 18
    print(f'Você deveria ter se alistado a {anos} anos atras para o alistamento militar, faça o imediatamente e evite problemas com a justiça')