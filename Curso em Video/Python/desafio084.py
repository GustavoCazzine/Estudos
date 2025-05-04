#faça o programa que leia o nome e peso de várias pessoas, guardando tudo em uma lista. No final, mostre: 1 - Quantas pessoas foram cadastras. / 2 - Uma listagem com as pessoas mais pesadas. / 3 - Uma listagem com as pessoas mais leves.


banco_pessoas = list()
dados = list()

mai = men = 0

while True:
    dados.append(str(input('Nome: ')).capitalize().strip())
    dados.append(float(input('Peso: ')))

    # Verificar se é o primeiro cadastro para iniciar as variáveis 'mai' e 'men'
    if len(banco_pessoas) == 0:
        mai = men = dados[1]
    else:
        if dados[1] > mai:  # Verifica maior peso
            mai = dados[1]

        if dados[1] < men:  # Verifica menor peso
            men = dados[1]

    banco_pessoas.append(dados[:])
    dados.clear()


    while True:
        continuar = str(input('Quer continuar? [S/N] ')).upper().strip()
        if continuar in 'SN':
            break
        else:
            print('ERRO! Responda apenas S/N.')
    if continuar == 'N':
        break

print('-'*80)
print(f'Ao todo, você cadastrou {len(banco_pessoas)} pessoas.')
print(f'O maior peso foi de {mai}Kg. Peso de ', end='')
for p in banco_pessoas:
    if p[1] == mai:
        print(f'[{p[0]}]')
print(f'O menor peso foi de {men}Kg. Peso de ', end='')
for p in banco_pessoas:
    if p[1] == men:
        print(f'[{p[0]}]')