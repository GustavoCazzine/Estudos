class Calculadora:
    def Soma(self, Valor1, Valor2):
        return Valor1 + Valor2
    
    def Subtraçao(self, Valor1, Valor2):
        return Valor1 - Valor2
    
    def Multiplicacao(self, Valor1, Valor2):
        return Valor1 * Valor2
    
    def Divisao(self, Valor1, Valor2):
        if Valor2 == 0:
            return "Erro: Divisão por zero"
        return Valor1 / Valor2
    
def main():
    calculadora = Calculadora()

    print('Bem vindo a calculadora')

    while True:
        print('1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - Sair')
        escolha = int(input('Escolha uma opção:'))
        if escolha == 1:
            print(calculadora.Soma(float(input('Primeiro valor: ')), float(input('Segundo valor: '))))
        elif escolha == 2:
            print(calculadora.Subtraçao(float(input('Primeiro valor: ')), float(input('Segundo valor: '))))
        elif escolha == 3:
            print(calculadora.Multiplicacao(float(input('Primeiro valor: ')), float(input('Segundo valor: '))))
        elif escolha == 4:
            print(calculadora.Divisao(float(input('Primeiro valor: ')), float(input('Segundo valor: '))))
        elif escolha == 5:
         print('Obrigado por usar a calculadora')
         break
        else:
            print('Opção inválida, tente novamente.')



if __name__ == "__main__":
    main()