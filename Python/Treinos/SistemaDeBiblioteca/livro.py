class Livro:
    def __init__(self, titulo:str, autor:str, ano:int, status:bool=True):
        self.titulo = titulo
        self.autor = autor
        self.ano = ano
        self.status = status

    def __str__(self):
        return f'Título: {self.titulo}, Autor: {self.autor}, Ano: {self.ano}, Status: {"Disponível" if self.status else "Indisponível"}'
    

    @staticmethod
    def cadastrar_livro():
        while True:
            try:
                titulo_livro = input('Digite o título do livro: ').lower().strip()
                if not titulo_livro:
                    raise ValueError("Título não pode ser vazio.")
                elif len(titulo_livro) <= 3:
                    raise ValueError("Título deve ter mais de 3 caracteres.")
                else:
                    break
            except ValueError as e:
                print(e)
                continue

        while True:
            try:
                autor_livro = input('Digite o autor do livro: ').lower().strip()
                if not autor_livro:
                    raise ValueError("Autor não pode ser vazio.")
                elif len(autor_livro) <= 3:
                    raise ValueError("Autor deve ter mais de 3 caracteres.")
                else:
                    break
            except ValueError as e:
                print(e)
                continue

        while True:
            try:
                ano_livro = int(input('Digite o ano do livro: ').lower().strip())
                if ano_livro < 0:
                    raise ValueError("Ano não pode ser negativo.")
                else:
                    break
            except ValueError as e:
                print(e)
                continue

        livro  = Livro(titulo_livro, autor_livro, ano_livro)
        return livro
    
