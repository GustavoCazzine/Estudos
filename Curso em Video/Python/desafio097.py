# Fala um programa que tenha uma função chamada escreva(), que receba um texto qualquer como parâmetro e mostre uma mensagem com tamanho adaptável.

# função para escrever texto e adaptar o tamanho da janela
def escreva(texto):
    tam = len(texto) + 4
    print('-'*tam)
    print(texto.center(tam, ' '))
    print('-'*tam)


# Programa principal
escreva(str('Olá, Mundo!'))  # chamada da função 'escreva'
escreva(str('Gustavo nascimento Cazzine'))
