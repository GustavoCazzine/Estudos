#Faça um programa que leia um ano qualquer e mostre se ele é Bissexto.

#Solicita o ano
ano = int(input('Qual ano você escolhe: '))

#Calculo de ano bissexto
if (ano % 4 == 0 and ano % 100!= 0) or ano % 400 == 0:
    print(f'O ano de {ano} é Bissexto!')
else:
    print(f'O ano de {ano} não é bissexto, não tem nada de especial nesse ano =(')
