def leiaDinheiro(msg):
    valido = False
    while not valido:
        entrada = str(input(msg)).replace(',', '.')
        if entrada.isalpha():
            print('Erro! O valor deve ser um número.')
        else:
            valido = True