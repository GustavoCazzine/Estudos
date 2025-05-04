def dobro(n, formato=False):
    res = n * 2
    return res if formato is False else moeda(res)

def metade(n, formato=False):
    res = n / 2
    return res if formato is False else moeda(res)

def aumento(n, taxa, formato=False):
    res = n + (n * (taxa/100))
    return res if formato is False else moeda(res)

def reduzir(n, taxa, formato=False):
    res = n - (n * (taxa/100))
    return res if formato is False else moeda(res)

def moeda(preco=0, moeda='R$'):
    res = f'{moeda}{preco:>8.2f}'.replace('.',',')
    return res