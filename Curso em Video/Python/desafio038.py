#Escreva um programa que leia dois n´meros inteiros e compare-os mostrando na tela uma mensagem: -O primeiro valor é maior / -O segundo valor é maior / -Não existe valor maior, os dois são iguais

#Entrada de dados - número inteiro

n = []

for i in range(2) :
    n.append(int(input('Digite um número: ')))

if n[0] > n[1]:
    print(f'O primeiro número ({n[0]}) é maior que o segundo ({n[1]}).')
elif n[0] < n[1]:
    print(f'O segundo número ({n[1]}) é maior que o primeiro ({n[0]})')
else:
    print(f'Não existe valor maior, os dois são iguais.')