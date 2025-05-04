class Livro:

    livros = list()

    def __init__(self, titulo, autor, ano_publicacao):
        self.titulo = titulo
        self.autor = autor
        self.ano_publicacao = ano_publicacao
        self._disponivel = False
        Livro.livros.append(self)

    def __str__(self):
        return f'{self.titulo} | {self.autor} | {self.ano_publicacao} | {self.disponivel}'
    
    @property
    def disponivel(self):
        return '✅' if self._disponivel else '❌'

    def alterar_status(self):
        self._disponivel = not self._disponivel

    @classmethod
    def exibir_livros(cls):
        print(f'{"Titulo".ljust(35)} | {"Autor".ljust(35)} | {"Ano de Publicação".ljust(35)} | {"Disponível".ljust(35)}')
        for livro in cls.livros:
            print(f'{livro.titulo.ljust(35)} | {livro.autor.ljust(35)} | {livro.ano_publicacao.ljust(35)} | {livro.disponivel.ljust(35)}')

    @classmethod
    def novo_livro(cls):
        titulo = input('Digite o título do livro: ')
        autor = input('Digite o autor do livro: ')
        ano_publicacao = input('Digite o ano de publicação do livro: ')
        return cls(titulo, autor, ano_publicacao)

def main():
    while True:
        print('1 - Cadastrar livro \n2 - Exibir livros \n3 - Sair')
        opcao = input('Digite a opção desejada: ')
        if opcao == '1':
            print('Bem vindo a tela de cadastro de livros.')
            livro = Livro.novo_livro()
        elif opcao == '2':
            print('Listando livros.')
            Livro.exibir_livros()
        elif opcao == '3':
            print('Saindo do sistema.')
            break
        

if __name__ == '__main__':
    main()
