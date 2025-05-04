#Crie um programa que leia duas notas de um aluno e calculo sua média, mostrando uma mensagem no final, de acordo com a média atingida: -média abaixo de 5.0:reprovado / -média entre 5.0 e 6.9: / -média 7.0 ou superios aprovado

#Lista vazia para armazenar as notas
notas = []

#Solicita as duas notas ao usuario
for i in range (2):
    notas.append(float(input('Digite a nota do aluno: ')))

#Calcula a média das notas
media = (notas[0] + notas[1]) / len(notas)

#Mostra na tela se o aluno foi aprovado ou reprovado
if media < 5.0:
    print(f'Média do aluno: {media:.1f} - Aluno Reprovado')
elif media >= 5.0 and media <= 6.9:
    print(f'Média do aluno: {media:.1f} - Aluno em Recuperação')
else:
    print(f'Média do aluno: {media:.1f} - Aluno Aprovado')

