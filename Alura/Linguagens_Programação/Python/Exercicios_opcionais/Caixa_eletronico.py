import time

class ContaBancaria:
    def __init__(self, saldo=1000):
        self.saldo = saldo

    def ExibirSaldo(self):
        print(f'Seu saldo atual é R${self.saldo}')
        time.sleep(1)

    def Sacar(self):
        quantida_sacadada = float(input('Quantia sacada? R$'))
        if quantida_sacadada > self.saldo:
            return print('Você não tem dinheiro suficiente para sacar')
        else:
            self.saldo -= quantida_sacadada
            print(f'Você sacou R${quantida_sacadada} com sucesso!')
            print(f'Seu novo saldo é R${self.saldo}')
        time.sleep(1)

    def Depositar(self):
        quantidade_depositada = float(input('Quantia depositada: R$'))
        self.saldo += quantidade_depositada
        print(f'Você depositou R${quantidade_depositada} com sucesso!')
        time.sleep(1)

print('Bem vindo ao caixa eletronico')
print('-'*20)
print()

nome = input('Digite seu nome para acessar: ').capitalize()
time.sleep(1)

conta = ContaBancaria()

print(f'Olá {nome}! Bem vindo ao sistema')

while True:
    print('-'*40)
    print('1 - Ver Saldo \n2 - Sacar \n3 - Depositar \n4 - Sair')
    escolha = int(input('Escolha uma opção: '))

    if escolha > 4:
        print('Opção invalida')
        time.sleep(1)

    elif escolha == 1:
        conta.ExibirSaldo()
        time.sleep(1)

    elif escolha == 2:
        conta.Sacar()
        time.sleep(1)

    elif escolha == 3:
        conta.Depositar()
        time.sleep(1)

    else:
        print('Até logo!')
        break


