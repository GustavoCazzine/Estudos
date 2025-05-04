while True:
    try:
        num1 = float(input('Informe o primeiro número: '))
        num2 = float(input('Informe o segundo número: '))
        break
    except ValueError:
        print('Por favor, insira números válidos.')

while True:
    operacao = input('Informe a operação (+, -, *, /) ou digite "sair" para encerrar: ').strip()
    
    if operacao.lower() == 'sair':
        print('Encerrando o programa...')
        break
    
    try:
        match operacao:
            case '+':
                print(f'A soma de {num1} e {num2} é {num1 + num2}')
            case '-':
                print(f'A subtração de {num1} e {num2} é {num1 - num2}')
            case '*':
                print(f'A multiplicação de {num1} e {num2} é {num1 * num2}')
            case '/':
                if num2 == 0:
                    print('Erro: Não é possível dividir por zero.')
                else:
                    print(f'A divisão de {num1} e {num2} é {num1 / num2}')
            case _:
                print('Operação inválida. Use +, -, * ou /.')
    except Exception as e:
        print(f'Ocorreu um erro inesperado: {e}')