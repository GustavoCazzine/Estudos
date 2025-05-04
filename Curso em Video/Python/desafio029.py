#Escreva um programa que leia a velocidade de um carro.
#Se ele ultrapassar 80km/h, mostre uma mensagem dizendo que ele foi multado.
#A multa vai custar R$7,00 por cada km acima do limite.

#Solicita a velocidade do carro
velo = int(input('Qual a velocidade do carro: '))

#calcula a velocidade
if velo < 40:
    print('Você está dirigindo abaixo da valocidade da via')
    print(f'Você passou por um radar de 80Km/h a {velo}Km/h, atente-se a se manter dentro da velocidade da via.')
elif velo <= 80:
    print('Você está dentro do limite de velocidade, continue dirigindo com segurança.')
else:
    print('Você passou do limite de velocidade permitida.')
    print(f'Você passou por um radar de 80Km/h a {velo}Km/h e recebeu uma multa de R${(velo - 80) * 7:.2f}')
