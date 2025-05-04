#Crie uma tupla preenchida com os 20 primeiros colocados da tabela do Campeonato Brasileiro de futebol, na ordem de colocação. Depois mostre: 1 - Apenas os 5 primeiros colocados. / 1 - os 4 ultimos colocados da tabela / 3 - Uma lista com os times em ordem alfabética / 4 - Em que posição na tabela está o time da Chapecoense.
from itertools import count

times = 'Botafogo', 'Palmeiras', 'Fortaleza', 'Flamengo', 'São Paulo', 'Internacional', 'Bahia', 'Cruzeiro', 'Atlético-MG', 'Vasco da Gama', 'Grêmio', 'Criciúma', 'Bragantino', 'Juventude', 'Athletico-PR', 'Fluminense', 'EC Vitória', 'Corinthians', 'Cuiabá', 'Atlético-GO'

print('-'*30)
print(f'{"PRIMEIROS COLOCADOS":^30}')
print('-'*30)

for pos, c in enumerate(times[:5], start=1):
    print(f'{pos}° Colocado - {c}')

print('-'*30)
print(f'{"ULTIMOS COLOCADOS":^30}')
print('-'*30)

for pos, u in enumerate(times[-4:], start=(17)):
    print(f'{pos}° Colocado - {u}')

print('-'*30)
print(f'{"ORDEM ALFABETICA":^30}')
print('-'*30)

times_ordenados = sorted(times)

for pos, c in enumerate(times_ordenados, start=1):
    print(f'{pos} Colocado - {c}')

print('-' * 30)
print(f'{"ENCONTRAR TIME":^30}')
print('-' * 30)

# Pergunta ao usuário qual time ele quer procurar
time_procurado = input('Digite o nome do time que deseja procurar: ').strip().title()

# Verifica se o time existe na tupla
if time_procurado in times:
    posicao = times.index(time_procurado)
    print(f'O time {time_procurado} está na posição {posicao + 1} da lista.')
else:
    print('Time não encontrado.')
