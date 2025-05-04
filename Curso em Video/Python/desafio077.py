#Crie um programa que tenha um tapla com várias palavras (não usar acentos). Depois disso, você deve mostrar , para cada palavra, quais são as sua vogais.


vogais = 'aeiouAEIOU'

palavras = 'aranha', 'pera', 'melancia', 'biblioteca', 'pneu'

# Percorrendo cada palavra na tupla
for palavra in palavras:
    print(f'Vogais na palavra "{palavra}":', end=' ')

    # Percorrendo cada letra na palavra atual
    for letra in palavra:
        if letra in vogais:
            print(letra, end=' ')  # Imprime a vogal encontrada

    print()  # Para pular para a próxima linha após cada palavra