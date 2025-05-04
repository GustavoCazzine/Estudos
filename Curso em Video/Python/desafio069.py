#Crie um programa que leia a idade e o sexo de várias pessoas. Cada pessoa cadastrada, o programa deverá perguntar se o usúario quer ou não continuar. No final, mostre: 1 - Quantas pessoas tem mais de 18 anos. / 2 - Quantos homens foram cadastrados. / 3 - Quantas mulheres tem menos de 20 anos


cont_idade = cont_homens = cont_mulher_menos_20 = 0

while True:
    print('-' * 30)
    print('CADASTRE UMA PESSOA')
    print('-' * 30)

    cadastro_nome = str(input('Nome: ')).strip().upper()
    cadastro_idade = int(input('Idade: '))

    # Validação do sexo
    while True:
        cadastro_sexo = str(input('Sexo: [M/F] ')).strip().upper()
        if cadastro_sexo in ['M', 'F']:
            break  # Sai do laço quando o sexo for válido
        else:
            print('Entrada inválida! Digite M para masculino ou F para feminino.')

    # Lógica para contar pessoas com mais de 18 anos
    if cadastro_idade >= 18:
        cont_idade += 1  # Conta pessoas com 18 anos ou mais

    # Contar homens
    if cadastro_sexo == 'M':
        cont_homens += 1  # Conta o número de homens

    # Contar mulheres com menos de 20 anos
    if cadastro_sexo == 'F' and cadastro_idade < 20:
        cont_mulher_menos_20 += 1  # Conta mulheres com menos de 20 anos

    # Pergunta se o usuário deseja continuar cadastrando
    while True:
        cadas = str(input('Cadastrar mais pessoas? [S/N] ').strip().upper())
        if cadas in ['S', 'N']:
            break  # Sai do laço quando a resposta for válida
        else:
            print('Resposta inválida! Digite S para continuar ou N para finalizar.')

    if cadas == 'N':
        break  # Encerra o laço principal se a resposta for 'N'

# Exibe os resultados finais
print(f'Foram cadastradas {cont_idade} pessoas com mais de 18 anos.')
print(f'Foram cadastrados {cont_homens} homens.')
print(f'Foram cadastradas {cont_mulher_menos_20} mulheres com menos de 20 anos.')
print('-' * 30)
print('PROGRAMA FINALIZADO')
print('-' * 30)
