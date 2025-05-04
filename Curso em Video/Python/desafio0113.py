def leiaInt(msg):
    ok = False
    valor = 0 
    while True:
        try:
            n = int(input(msg))
            valor = int(n)
            ok = True
        except ValueError:
            print('Erro! Digite um valor inteiro')
        except KeyboardInterrupt:
            print('ERRO: O usuário preferiu não digitar o valor.')
            valor = 0
            break
            
        if ok:
            break
    return valor

def leiafloat(msg):
    ok = False
    valor = 0
    while True:
        try:
            n = float(input(msg))
            valor = n
            ok = True
        except ValueError:
            print('Erro! Digite um valor real')
        except KeyboardInterrupt:
            print('ERRO: O usuário preferiu não digitar o valor.')
            valor = 0
            break
        if ok:
            break
    return valor

n = leiaInt('Digite um número inteiro: ')
f = leiafloat('Digite um número Real:')
print(f'O valor inteiro digitado foi {n} e o real foi {f}.')