#Escreva um programa que converta uma temperatura digitada em °C e converta para °F.

temp = float(input('Informe a temperatura em graus Celsius: '))

f = (temp*1.8) + 32

print(f'A temperatura de {temp}°C corresponde a {f}°F')