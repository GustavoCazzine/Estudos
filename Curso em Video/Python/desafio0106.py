c = ('\033[m', '\033[0;30;41m', '\033[0;30;42m',
     '\033[0;30;43m', '\033[0;30;44m', '\033[0;30;45m')


def ajuda(com):
    titulos(f'Acessando o manual do comando \'{com}\'', 4)
    print(c[5])
    help(com)
    print(c[0])


def titulos(msg, cor=0):
    tam = len(msg) + 4
    print(c[cor])
    print('~' * tam)
    print(f'  {msg}  ')
    print('~' * tam)
    print(c[0])


# Programa Principal
comando = ''
while True:
    titulos('SISTEMA DE AJUDA PyHELP', 2)
    comando = str(input('Função ou Biblioteca > '))
    if comando.upper() == 'FIM':
        break
    else:
        ajuda(comando)
titulos('ATÉ LOGO!', 1)
