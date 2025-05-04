#A confederalçao nacional de natação precisa de um programa que leia o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade: -até 9 anos: mirim / -Até 14 anos: infantil / -Até 19 anos: Junior / -até 20 anos: sênior / -acima: master

#Solicita a idade do atleta
idade = int(input('Digite sua idade: '))

if idade <= 9:
    categoria = 'MIRIM'
elif idade <= 14:
    categoria = 'INFANTIL'
elif idade <= 19:
    categoria = 'JUNIOR'
elif idade <= 20:
    categoria = 'SÊNIOR'
else:
    categoria = 'MASTER'

print(f'Você tem {idade} anos e sua categoria é {categoria}.')
