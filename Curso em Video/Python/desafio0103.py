def ficha(jogador='', gols=''):
    if jogador == '':
        jogador = "<desconhecido>"
    if not gols.isnumeric():
        if (type(gols) == str):
            gols = int(0)
    else:
        gols = int(gols)
    return print(f'O jogador(a) {jogador} fez {gols} gol(s) no campeonato.')


# programa principal
ficha(jogador=str(input('Nome do Jogador: ')).capitalize().strip(),
      gols=str(input('Número de Gols: ')).strip())
