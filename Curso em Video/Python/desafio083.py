#Crie um programa onde o usuario digite uma expressão qualquer que use parênteses. Seu aplicativo deverá analisar se a expressão passada estã com os parênteses abertos e fechados na ordem correta.

ex = str(input('Digite uma expressão matematica, colocando entre parênteses: '))
if ex.count('(') == ex.count(')'):
    print('Essa é expressão é válida.')
else:
    print('Essa expressão é inválida')
