#Faça um programa que leia um número qualquer e mostre o seu fatorial.


num = int(input("Digite um número para calcular o fatorial: "))
resultado = 1  # Começamos com 1, porque 1 é o elemento neutro da multiplicação
fac = num

while fac > 0:  # Continuamos enquanto fac for maior que 0
    resultado *= fac  # Multiplicamos o resultado pelo valor atual de fac
    fac -= 1  # Diminuímos fac para continuar a sequência de multiplicações

print(f"O fatorial de {num} é {resultado}")