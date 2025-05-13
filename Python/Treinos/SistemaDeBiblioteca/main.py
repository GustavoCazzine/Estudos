from livro import Livro
from biblioteca import Biblioteca
from usuario import Usuario

def menu():
    print("\n" + "=" * 30)
    print("          MENU PRINCIPAL")
    print("=" * 30)
    opcoes = ["Cadastrar Livro", "Listar Livros", "Cadastrar Usuário", "Sair"]
    for enum, itens in enumerate(opcoes, start=1):
        print(f'{enum} - {itens}')
    print("=" * 30)
    return opcoes

def selecionar_opcao(opcoes):
    while True:
        try:
            opcao = int(input("\nEscolha uma opção: "))
            if opcao < 1 or opcao > len(opcoes):
                raise ValueError
            return opcao
        except ValueError:
            print("\n[ERRO] Opção inválida! Escolha uma opção entre 1 e", len(opcoes))

def limpar_tela():
    import os
    os.system('cls' if os.name == 'nt' else 'clear')

def mensagem_boas_vindas():
    print("=" * 40)
    print("   Bem-vindo ao Sistema de Biblioteca!")
    print("=" * 40)

def delay(segundos):
    import time
    time.sleep(segundos)

def titulo(txd):
    print(f'\n=== {txd.upper()} ===')

def main():
    limpar_tela()
    mensagem_boas_vindas()

    biblioteca = Biblioteca()

    while True:
        opcoes = menu()
        opcao = selecionar_opcao(opcoes)
        limpar_tela()
        match opcao:
            case 1:
                titulo("Cadastro de Livro")
                livro = Livro.cadastrar_livro()
                biblioteca.adicionar_livro(livro)
                print("\n[SUCESSO] Livro cadastrado com sucesso!")
                delay(2)
            case 2:
                titulo("Listar Livros")
                biblioteca.listar_livros()
                delay(2)
            case 3:
                titulo("Cadastro de Usuário")
                usuario = Usuario.cadastrar_usuario()
                biblioteca.adicionar_usuario(usuario)                
                print("\n[SUCESSO] Usuário cadastrado com sucesso!")
                delay(2)
            case 4:
                print("\n[INFO] Saindo do sistema...")
                delay(2)
                break
            case _:
                print("\n[ERRO] Opção inválida! Tente novamente.")
                delay(2)

        limpar_tela()
if __name__ == "__main__":
    main()