#Crie um programa que leia uma frase qualquer e diga se ela é palíndromo, desconsiderando os espaços.

import string


# Função para verificar se uma frase é palíndromo
def eh_palindromo(frase):
    # Remove espaços e pontuações, e converte para minúsculas
    frase_limpa = ''.join(char.lower() for char in frase if char.isalnum())

    # Compara a frase limpa com sua versão invertida
    return frase_limpa == frase_limpa[::-1]


# Solicita uma frase ao usuário
frase = input("Digite uma frase: ")

# Verifica se a frase é um palíndromo e exibe o resultado
if eh_palindromo(frase):
    print("A frase é um palíndromo!")
else:
    print("A frase não é um palíndromo.")