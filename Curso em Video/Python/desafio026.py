#Faça um programa que leia uma frase pelo teclado e mostre: -Quantas vezes aparece a letra ''a''; -em que posição ela aparece a primeira vez; -Em que posição ela aparece a última vez.

#Entrada de dados - Frase
frase = str(input('Digite uma frase: '))

#manipulando os dados
frase = frase.upper().strip()

#Impressão dos resultados
print(f'A letra A aparece {(frase.count('A'))} vezes na frase.')
print(f'A primeira letra A apareceu na posição {frase.find('A')+1}.')
print(f'A última letra A apareceu na posição {frase.rfind('A')+1}')
