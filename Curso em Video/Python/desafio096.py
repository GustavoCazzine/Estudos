#função para calcular e retornar o valor da area de dois valores
def calcular_area(largura, comprimento):
    area = largura * comprimento
    print(f'\nA área de um terreno {largura}x{comprimento} é de {area}m²')

def titulos(titulo):
    print(f'{"-"*30}\n{titulo:^30}\n{"-"*30}')

#Programa principal
titulos('Controle de Terrenos')
calcular_area(largura = float(input('LARGURA (m): ')), comprimento = float(input('COMPRIMENTO (m): ')))  #chamando a função com os valores de largura e comprimento