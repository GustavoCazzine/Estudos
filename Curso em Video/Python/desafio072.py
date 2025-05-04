#Crie um programa que tenha uma tupla totalmente preenchuda com uma contagem por extenso, de zero até 20. Seu programa deverá ler um número pelo teclado (*entre 0 e 20) e mostra-lo por extenso.

#Tupla para armazenar os números
numeros = 'Zero','Um', 'Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez','Onze','Doze','Treze','Quatorze','Quinze','Dezesseis','Dezessete','Dezoito','Dezenove','Vinte'


while True:
    escolha = int(input('Digite um número entre 0 e 20: '))

    # Verifica se o número está no intervalo de 0 a 20
    if 0 <= escolha <= 20:
        print(f'Você digitou o número {numeros[escolha]}')
        break  # Sai do loop após uma entrada válida
    else:
        print('Tente novamente. Digite um número entre 0 e 20.')
