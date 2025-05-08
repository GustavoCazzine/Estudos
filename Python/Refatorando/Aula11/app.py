while True:
    try:
        numero = int(input("Digite um número: "))
        print(numero)
    except ZeroDivisionError:
        print("Não é possivel dividir por zero.")
    except ValueError:
        print("Digite um valor válido.")
    except:
        print("Erro inesperado.")
    finally:
        print("Sempre executa")