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
        if not self.livros:
            return "Nenhum livro cadastrado na biblioteca."
        return "\n".join([str(livro) for livro in self.livros])
    
    def listar_livros(self):
        if not self.livros:
            print("Nenhum livro cadastrado.")
        else:
            for livro in self.livros:
                print(livro)

    def listar_usuarios(self):
        if not self.usuarios:
            print("Nenhum usuário cadastrado.")
        else:
            for usuario in self.usuarios:
                print(usuario)

    def emprestar_livro(self):
        if not self.livros:
            print("Nenhum livro cadastrado.")
            return
        elif not self.usuarios:
            print("Nenhum usuário cadastrado.")
            return

        print("\n=== Livros Cadastrados ===")
        self.listar_livros()
        print("\n=== Usuários Cadastrados ===")
        self.listar_usuarios()

        while True:
            titulo_livro = input("\nDigite o título do livro que deseja emprestar: ").strip().lower()
            usuario_cpf = input("Digite o CPF do usuário: ").strip()

            if not titulo_livro or not usuario_cpf:
                print("\n[ERRO] Título do livro e CPF do usuário não podem ser vazios.")
                continue

            # Verifica se o livro existe
            livro_encontrado = None
            for livro in self.livros:
                if livro.titulo.lower() == titulo_livro:
                    livro_encontrado = livro
                    break

            if not livro_encontrado:
                print(f"\n[ERRO] Livro '{titulo_livro}' não encontrado.")
                continue

            # Verifica se o usuário existe
            usuario_encontrado = None
            for usuario in self.usuarios:
                if usuario.cpf == usuario_cpf:
                    usuario_encontrado = usuario
                    break

            if not usuario_encontrado:
                print(f"\n[ERRO] Usuário com CPF '{usuario_cpf}' não encontrado.")
                continue

            # Verifica se o livro já está emprestado
            if not livro_encontrado.status:
                print(f"\n[ERRO] O livro '{livro_encontrado.titulo}' já está emprestado.")
                return

            # Realiza o empréstimo
            livro_encontrado.mudar_status(self)
            usuario_encontrado.livros_emprestados.append(livro_encontrado)
            print(f"\n[SUCESSO] O livro '{livro_encontrado.titulo}' foi emprestado para o usuário '{usuario_encontrado.nome}'.")
            return
        







