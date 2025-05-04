#Cria um programa que simule o funcionamento de um caixa eletrônico. No inicio, pergunte ao usuário qual será o valor a ser sacado (número inteiro) e o programa vai informar quantas cédulas de cada valor serão entregues. /OBS: considere que o caixa possui cédulas de 50, 20, 10 e 1

# Inicializa as variáveis para contagem das cédulas
cedula_50 = cedula_20 = cedula_10 = cedula_1 = 0

while True:
    # Solicita o valor a ser sacado
    sacar = int(input('Quantos quer sacar? R$ '))

    # Verifica se o valor é válido
    if sacar <= 0:
        print('Digite um valor válido maior que 0.')
        continue  # Retorna ao início do loop

    # Calcula a quantidade de cédulas para cada valor
    if sacar >= 50:
        cedula_50 = sacar // 50  # Número de cédulas de R$50
        sacar %= 50  # Atualiza o valor restante

    if sacar >= 20:
        cedula_20 = sacar // 20  # Número de cédulas de R$20
        sacar %= 20  # Atualiza o valor restante

    if sacar >= 10:
        cedula_10 = sacar // 10  # Número de cédulas de R$10
        sacar %= 10  # Atualiza o valor restante

    if sacar >= 1:
        cedula_1 = sacar  # Restante é o número de cédulas de R$1

    # Exibe o resultado do saque
    total_sacado = (cedula_50 * 50) + (cedula_20 * 20) + (cedula_10 * 10) + cedula_1
    print(f'\nVocê sacou um total de R${total_sacado:.2f}')

    # Imprime apenas as cédulas que foram entregues
    if cedula_50 > 0:
        print(f'Você recebeu {cedula_50} cédulas de R$50')
    if cedula_20 > 0:
        print(f'Você recebeu {cedula_20} cédulas de R$20')
    if cedula_10 > 0:
        print(f'Você recebeu {cedula_10} cédulas de R$10')
    if cedula_1 > 0:
        print(f'Você recebeu {cedula_1} cédulas de R$1')

    # Pergunta se o usuário deseja realizar outro saque
    continuar = input('\nDeseja realizar outro saque? [S/N] ').strip().upper()
    if continuar == 'N':
        break  # Sai do loop se o usuário não quiser continuar

print('Obrigado por usar o caixa eletrônico!')
