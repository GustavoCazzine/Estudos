from livro import Livro
from usuario import Usuario

class Biblioteca:
    def __init__(self, livros=None, usuarios=None):
        self.livros = livros if livros else []
        self.usuarios = usuarios if usuarios else []


    def adicionar_livro(self, livro: Livro):
        self.livros.append(livro)
        
    def adicionar_usuario(self, usuario: Usuario):
        self.usuarios.append(usuario)

    def __str__(self):
        return f'Livros: {self.livros}'
    
    def listar_livros(self):
        if self.livros:
            print("Livros cadastrados:")
            for livro in self.livros:
                print(livro)
        else:
            print("Nenhum livro cadastrado.")