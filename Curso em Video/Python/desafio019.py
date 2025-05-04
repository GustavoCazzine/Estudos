#Um professor que sortear um dos seus quatro alunos para apagar o quadro. Faça um programa que ajude a ele, lendo o nome deles e escrevendo o nome do escolhido.

#Biblioteca vazia para armazenar os nomes dos alunos
alunos = []

#Loop para captar os nomes dos 4 alunos
for i in range(1,5):
    aluno = str(input('Digite o nome do aluno: '))
    alunos.append(aluno)
    print(f'Aluno {i}: {aluno}')

#Importar biblioteca random para selecionar os alunos
import random

print(f'O aluno escolhido para apagar o quadro foi: {random.choice(alunos)}')