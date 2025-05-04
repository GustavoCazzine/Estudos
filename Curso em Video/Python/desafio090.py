aluno = dict()

aluno['nome'] = str(input('Nome: '))
aluno['media'] = float(input(f'Média de {aluno["nome"]}: '))
if aluno["media"] >= 5:
    aluno['situacao'] = 'Aprovado'
elif aluno["media"] < 5:
    aluno['situacao'] = 'Reprovado'

print('-'*30)
print(f'Aluno: {aluno["nome"]}')
print(f'Média: {aluno["media"]}')
print(f'Situação: {aluno["situacao"]}')
