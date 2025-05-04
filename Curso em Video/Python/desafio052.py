#Faça um programa que leia um número inteiro e diga se ele é ou não um número primo.

import math

# Função para verificar se um número é primo
def eh_primo(numero):
    if numero <= 1:
        return False  # Números menores ou iguais a 1 não são primos
    for i in range(2, int(math.sqrt(numero)) + 1):
        if numero % i == 0:
            return False  # Se divisível por i, não é primo
    return True  # Se não encontrou divisor, é primo

# Solicita um número ao usuário
numero = int(input("Digite um número: "))

# Verifica se é primo e exibe o resultado
if eh_primo(numero):
    print(f"{numero} é primo.")
else:
    print(f"{numero} não é primo.")
