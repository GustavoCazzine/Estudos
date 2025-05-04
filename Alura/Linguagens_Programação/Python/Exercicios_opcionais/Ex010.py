def Media_notas():
    print('Bem Vindo ao sistema de medias')
    print('-'*20)
    print()
    notas = list()
    quantidade_notas = int(input('Quantas notas deseja cadastrar? '))
    for i in range(1, quantidade_notas +1):
        nota = float(input(f'{i}° nota: '))
        notas.append(nota)
        print('Nota adicionada com sucesso!')
        print('-'*20)
    print(f'A media das notas é: {sum(notas) / len(notas)}')

def Converter_temp():
    print('Bem Vindo ao sistema de conversão de temperatura')
    print('-'*20)
    print()

    celsius = float(input('Digite a temperatura em Celsius: '))
    fah = (celsius * 1.8) + 32
    print(f'{celsius}°C é igual a {fah}°F')

def Calcular_idade():
    print('Bem Vindo ao sistema de calculo de idade')
    print('-'*20)
    print()

    ano_nascimento = int(input('Digite seu ano de nascimento: '))
    idade = 2024 - ano_nascimento
    print(f'Sua idade é: {idade} anos')

def Verificar_par():
    print('Bem Vindo ao sistema de verificação de paridade')
    print('-'*20)
    print()

    num = int(input('Digite um número: '))
    if num % 2 == 0:
        print(f'O número {num} é PAR')
    else:
        print(f'O número {num} é ÍMPAR')

def Contador_Vogais():
    print('Bem Vindo ao sistema de contagem de vogais')
    print('-'*20)
    print()

    contador = 0
    frase = input('Digite a frase: ')
    for palavras in frase:
        if palavras.lower() in 'aeiou':
            contador += 1
    print(f'Sua frase tem {contador} vogais.')

def Verificar_palindromo():
    print('Bem Vindo ao sistema de verificação de palíndromo')
    print('-'*20)
    print()

    palavra = input('Digite sua palavra: ').lower().replace(' ', '')
    invertida = palavra[::-1]
    if palavra == invertida:
        print(f'Sua palavra {palavra} é um palíndromo')
    else:
        print(f'Sua palavra {palavra} não é um palíndromo')

def Verificar_numeros():
    print('Bem Vindo ao sistema de verificação de números')
    print('-'*20)
    print()

    numeros = list()

    while True: 
        num = int(input('Digite um número: (999 para sair)'))
        if num == 999:
            break
        else:
            numeros.append(num)
    negativo  = zeros = positivos = 0
    for numbers in numeros:
        if numbers < 0:
            negativo += 1
        elif numbers == 0:
            zeros += 1
        else:
            positivos += 1

    print(f'Relatorio: \n {negativo} números negativos \n {zeros} números zeros \n {positivos} números positivos')

def Verificar_numero_op2():
    print('Bem Vindo ao sistema de verificação de números')
    print('-'*20)
    print()
    num = int(input('Digite uma sequencia de número: '))

    negativo  = zeros = positivos = 0
    
    for numeros in str(num):
        if int(numeros) > 0:
            positivos += 1
        if int(numeros) == 0:
            zeros += 1

    print(f'Relatorio: \n {negativo} números negativos \n {zeros} números zeros \n {positivos} números positivos')

def Soma_numeros():
    print('Bem Vindo ao sistema de soma de números')
    print('-'*20)
    print()

    num = int(input('Digite um número: '))
    numeros = list()
    for i in range (1, num + 1):
        numeros.append(i)
    print(f'A soma de 1 até {num} é {sum(numeros)}')

def Tabela_multiplicacao():
    print('Bem Vindo ao sistema de tabela de multiplicação')
    print('-'*20)
    print()

    num = int(input('Digite um número:'))
    for i in range(1, 11):
        print(f'{num} X {i} = {num * i}')

def Converter_moeda():
    print('Bem Vindo ao sistema de conversão de moeda')
    print('-'*20)
    print()

    num = float(input('Valor em Real: R$'))
    Valor_dolar = 5
    dolar = num / Valor_dolar

    print(f'R${num} é igual a US${dolar:.2f}')

def Contar_palavras():
    print('Bem Vindo ao sistema de contagem de palavras')
    print('-'*20)
    print()
    frase = input('Digite uma frase: ').split(' ')
    print(f'A frase tem {len(frase)} palavras')

