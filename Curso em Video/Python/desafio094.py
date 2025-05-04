pessoas_cadastradas = 0
idade = list()
lista = list()
mulheres = list()
maior_media = list()
while True:
    pessoa = dict()
    pessoa['nome'] = str(input('Nome: ')).capitalize()
    while True:
        pessoa['idade'] = int(input('Idade: '))
        idade.append(pessoa['idade'])
        if pessoa['idade'] <= 0 or pessoa['idade'] > 105:
            print('Idade inválida. Por favor, insira uma idade válida')
        else:
            break
    while True:
        pessoa['sexo'] = str(input('Sexo [M/F]: ')).upper()
        if  pessoa['sexo'] == 'F':
            mulheres.append(pessoa['nome'])
        if pessoa['sexo'] in 'MF':
            break
        else:
            print('Sexo inválido! Por favor, insira seu sexo novamente.')
    lista.append(pessoa)
    while True:
        continuar = str(input('Quer continuar [S/N]? ')).strip().upper()
        if continuar in 'SN':
            break
        else:
            print('Opção inválida! Por favor, insira uma opção novamente.')
    pessoas_cadastradas += 1
    if continuar in 'N':
        break
media = sum(idade) / len(idade)
maior_media = [p['nome'] for p in lista if p['idade'] > media]
print(f'Quantidade de pessoas cadastradas: {pessoas_cadastradas}')
print(f'Média de idade: {media:.2f}')
print(f'Nome das mulheres: {mulheres}')
print(f'Nomes das pessoas com idade acima da média: {maior_media}')
