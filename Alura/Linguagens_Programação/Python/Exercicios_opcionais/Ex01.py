#Imprima a frase: Python na Escola de Programação da Alura
print('Python na Escola de Programação da Alura.')


#Imprima a frase: Meu nome é {nome} e tenho {idade} anos, em que nome e idade precisam ser valores armazenados em variáveis.
nome = str(input('Nome: '))
idade = int(input('Idade: '))
print(f'Meu nome é {nome} e tenha {idade} anos')    


#Imprima a palavra: "ALURA" de modo que cada letra fique em uma linha, como mostrado a seguir:
for letra in 'ALURA':
    print(letra)
    

#Imprima a frase: O valor arredondado de pi é: {pi_arredondado} em que o valor de pi precisa ser armazenado em uma variável e arredondado para duas casas decimais. Para facilitar, utilize: pi = 3.14159
pi_arredondado = 3.14159
print(f'O valor arredondado de pi é: {pi_arredondado:.2f}')