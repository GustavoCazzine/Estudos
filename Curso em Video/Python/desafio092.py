dados = dict()

dados['nome'] = str(input('Nome: ')).capitalize()
dados['idade'] = 2024 - int(input('Ano de Nascimento: '))
dados['ctps'] = int(input('Carteira de Trabalho (0 caso não tenha): '))
if dados['ctps'] == 0:
    print('Você não tem carteira de trabalho')
    del  dados['ctps']
else:
    dados['contratacao'] = int(input('Ano de Contratação: '))
    dados['salario'] = float(input('Salário: R$'))
    dados['aposentadoria'] =  dados['idade'] + (35 - (2024 - dados['contratacao']))

print('-'*30)

for k, v  in dados.items():
    print(f'{k}: {v}')
