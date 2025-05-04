#Escreva um programa que leia um valor em metros e o exiba convertido em centimetros e milímetros
metros = float(input('Digite um valor em metros: '))
centimetros = metros * 100
milimetros = metros * 1000
print(f'{metros:.0f} metros tem {centimetros:.0f} centimetros e {milimetros:.0f} milimetros')