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
    res = f'{moeda}{preco:>8.2f}'.replace('.', ',')
    return res


def resumo(p, taxa_aumentar=0, taxa_reduzir=0):
    print(f'{"-"*35}\n{'RESUMO DE VALOR'.center(35)}\n{"-"*35}\n')
    print(f'Preço analisado: \t{moeda(p)}')
    print(f'Dobro do preço: \t{moeda(dobro(p))}')
    print(f'Metade do preço: \t{moeda(metade(p))}')
    print(f'{taxa_aumentar}% de aumento: \t{moeda(aumento(p, taxa_aumentar))}')
    print(f'{taxa_reduzir}% de redução: \t\t{moeda(reduzir(p, taxa_reduzir))}')
    print(f'{"-"*30}')
