jogador = dict()
gols = list()

jogador['nome'] = str(input('Nome do Jogador: ')).capitalize()
jogador['partidas'] = int(input(f'Quantas partidas {jogador["nome"]} jogou? '))

for c in range(1, jogador['partidas'] + 1):
    gols.append(int(input(f'Quantos gols na partida {c}? ')))

jogador['gols'] = gols
jogador['total de gols'] = sum(gols)

for k, v in  jogador.items():
    print(f'{k}: {v}')

print(f'O jogador {jogador["nome"]} jogou  {jogador["partidas"]} partidas.')
for  i, c in enumerate(jogador['gols'], start=1):
    print(f' → Na partida {i}, fez {c} gols.')
print(f'Foi um total de  {jogador["total de gols"]} gols.')


