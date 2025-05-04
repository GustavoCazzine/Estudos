# Classe Livro definida em minha_classe.py

class Livro:

    livros = list()

    def __init__(self, titulo, autor, ano_publicacao, disponivel=True):
        self.titulo = titulo
        self.autor = autor
        self.ano_publicacao = ano_publicacao
        self.disponivel = disponivel
        Livro.livros.append(self)

    def __str__(self):
        return f"Livro: {self.titulo} | Autor: {self.autor} | Ano de Publicação: {self.ano_publicacao}"

    def emprestar(self):
        self.disponivel = False

    @staticmethod
    def verificar_disponibilidade(ano):
        livros_disponiveis = [livro for livro in Livro.livros if livro.ano_publicacao == ano and livro.disponivel]
        return livros_disponiveis

# Script de teste
livro1 = Livro("Aprendendo Python", "John Doe", 2022)
livro2 = Livro("Data Science Fundamentals", "Jane Smith", 2020)
livro3 = Livro("Python Cookbook", "Samuel Developer", 2019)

print(livro1)
print(livro2)

print(f"Antes de emprestar: Livro disponível? {livro3.disponivel}")
livro3.emprestar()
print(f"Depois de emprestar: Livro disponível? {livro3.disponivel}")

Livro.livros = [livro1, livro2, livro3]  # Certifique-se de adicionar os livros à lista

ano_especifico = 2020
livros_disponiveis_ano = Livro.verificar_disponibilidade(ano_especifico)
print(f"Livros disponíveis em {ano_especifico}: {livros_disponiveis_ano}")
