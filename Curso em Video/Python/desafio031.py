#Desenvolva um programa que pergunte a distância de uma viagem em Km. Calcule o preço da passagem, cobrando R$0,50 por Km para viagens de até 200km e R$0.45 para viagens mais longas

#Solicita a distancia percorrida na viagem
distancia = int(input('Qual a distancia percorrida na viagem? '))
if distancia <= 200:
    print(f'Você viajou por {distancia}Km e o preço da viagem é de R${distancia * 0.50:.2f}')
else:
    print(f'Você viajou por {distancia}Km e o preço da viagem é de R${distancia * 0.45:.2f}')