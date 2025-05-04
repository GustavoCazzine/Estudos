#O mesmo professor do desafio anterios quer sortear a ordem de apresentação de trabalhos dos alunos. Faça um programa que leia o nome dos quatro alunos e mostre a ordem sorteada.

#Biblioteca vazia para armazerar o nome dos alunos
alunos = []

#Loop para capturar o nome dos alunos
for i in range (1,5):
    aluno =  str(input('Digite o nome do aluno: '))
    alunos.append(aluno)
    print(f'{i}: {aluno}')

#Embaralha a lista e sortea um
import random
random.shuffle(alunos)
print(alunos)
