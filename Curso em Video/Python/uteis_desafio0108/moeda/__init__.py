def dobro(n=0):
    return n * 2

def metade(n):
    return n / 2

def aumento(n, taxa):
    return n + (n * (taxa/100))

def reduzir(n, taxa):
    return n - (n * (taxa/100))

def moeda(preco=0, moeda='R$'):
    return f'{moeda}{preco:>8.2f}'.replace('.',',')