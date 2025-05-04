#Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo

import math

# Ler o ângulo do usuário
angulo_graus = float(input("Digite o ângulo em graus: "))

# Converter o ângulo de graus para radianos
angulo_radianos = math.radians(angulo_graus)

# Calcular o seno, cosseno e tangente
seno = math.sin(angulo_radianos)
cosseno = math.cos(angulo_radianos)
tangente = math.tan(angulo_radianos)

# Mostrar os resultados
print(f"Seno de {angulo_graus} graus: {seno:.4f}")
print(f"Cosseno de {angulo_graus} graus: {cosseno:.4f}")
print(f"Tangente de {angulo_graus} graus: {tangente:.4f}")