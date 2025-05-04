#Implemente uma classe chamada Carro com os atributos básicos, como modelo, cor e ano. Crie uma instância dessa classe e atribua valores aos seus atributos.
class Carros():
    def __init__(self, modelo, cor, ano):
        self.modelo = modelo
        self.cor = cor
        self.ano - ano


#Crie uma classe chamada Restaurante com os atributos nome, categoria, ativo e crie mais 2 atributos. Instancie um restaurante e atribua valores aos seus atributos.
class Restaurantev2():
    def __init__(self, nome, categoria, ativo, inalgurado, estado):
        self.nome = nome
        self.categoria = categoria
        self.ativo = ativo
        self.inalgurado = inalgurado
        self.estado = estado


#Modifique a classe Restaurante adicionando um construtor que aceita nome e categoria como parâmetros e inicia ativo como False por padrão. Crie uma instância utilizando o construtor.
class Restaurante:
    def __init__(self, nome='', categoria='', ativo=False, inalgurado=None, estado=''):
        self.nome = nome
        self.categoria = categoria
        self.ativo = ativo
        self.inalgurado = inalgurado
        self.estado = estado


#Adicione um método especial __str__ à classe Restaurante para que, ao imprimir uma instância, seja exibida uma mensagem formatada com o nome e a categoria. Exiba essa mensagem para uma instância de restaurante.
    def __str__(self):
        return f'{self.nome} | {self.categoria} | {self.ativo} | {self.inalgurado} | {self.estado}'
    
restauranteTeste = Restaurante('Padaria Torre Forte', 'Padaria', True, 28122003, 'São Paulo')

print(restauranteTeste)


#Crie uma classe chamada Cliente e pense em 4 atributos. Em seguida, instancie 3 objetos desta classe e atribua valores aos seus atributos através de um método construtor.
class Cliente:
    def __init__(self, nome, idade, telefone, endereco):
        self.nome = nome
        self.idade = idade
        self.telefone = telefone
        self.endereco = endereco

    def __str__(self):
        return f'{self.nome} | {self.idade} | `{self.telefone} | {self.endereco}'
    
cliente1 = Cliente('Joana', 25, '19981559831', 'Rua 1')

print(cliente1)