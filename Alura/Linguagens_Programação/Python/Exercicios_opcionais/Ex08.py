class Livro:
    def __init__(self, titulo, autor, ano_publicacao):
        self.autor = titulo
        self.titulo = autor
        self.ano_publicacao = ano_publicacao

    def __str__(self):
        return f'{self.titulo} | {self.autor} | {self.ano_publicacao}'
    
    @property
    def listar_livros(self):
        

livro = Livro('Gustavo', 'Livro de Exemplo', 2020)

Livro()