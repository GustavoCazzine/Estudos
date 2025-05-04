'''Crie uma lista para cada informação a seguir:

Lista de números de 1 a 10;
Lista com quatro nomes;
Lista com o ano que você nasceu e o ano atual.'''
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nomes = ['João', 'Maria', 'Joaquin', 'Brenda']
anos = [2003, 2024]


#Crie uma lista e utilize um loop for para percorrer todos os elementos da lista.
carros = ['Uno', 'Celta', 'Gol', 'Palio', 'Civic']
for i, carro in enumerate(carros, start= 1):
    print(f'Veiculo {i}: {carro}')



#Utilize um loop for para calcular a soma dos números ímpares de 1 a 10.
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
soma = 0
for numeros in lista:
    if numeros % 2 == 0:
        soma += numeros
print(f'A soma dos números pares de 1 a 10 é: {soma}')


#Utilize um loop for para imprimir os números de 1 a 10 em ordem decrescente.
for c in range(10, 0, -1):
    print(c)

# Solicite ao usuário um número e, em seguida, utilize um loop for para imprimir a tabuada desse número, indo de 1 a 10.
try:
    numero = int(input('Digite um número para ver sua tabuada: '))
except:
    print('Você precisa digitar um número inteiro!')
else:
    for i in range(1, 11):
        print(f'{numero} x {i} = {numero*i}')


# Crie uma lista de números e utilize um loop for para calcular a soma de todos os elementos. Utilize um bloco try-except para lidar com possíveis exceções.
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
try:
    soma = 0
    for numero in lista:
        soma += numero
except:
    print('Erro ao calcular a soma')
else:
    print(f'A soma dos elementos da lista é: {soma}')


#Construa um código que calcule a média dos valores em uma lista. Utilize um bloco try-except para lidar com a divisão por zero, caso a lista esteja vazia.
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
try:
    soma = 0
    for numero in lista:
        soma += numero
except:
    print('Erro ao calcular a soma')
try:
    media = soma / len(lista)
except ZeroDivisionError:
    print("A lista está vazia, não é possível calcular a média.")
except Exception as e:
    print(f"Ocorreu um erro: {e}")
else:
    print(f'A média dos elementos da lista é: {media}')