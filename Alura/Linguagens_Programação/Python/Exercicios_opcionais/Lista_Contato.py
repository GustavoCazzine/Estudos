class Contato:
    lista_telefonica = list()

    def __init__(self, nome, telefone, email):
        self.nome = nome
        self.telefone = int(telefone)
        self.email = email
        self.lista_telefonica.append(self)

    def exibir(self):
        print(f'Nome: {self.nome}\nTelefone: {self.telefone}\nEmail: {self.email}')

    @classmethod
    def ListarContatos(cls):
        print(f"{'Nome'.ljust(26)} | {'Telefone'.ljust(15)} | {'Email'.ljust(40)}")
        print('-' * 80)
        for item in cls.lista_telefonica:
            print(f"{item.nome.ljust(25)} | {item.telefone:<15} | {item.email.ljust(40)}")

    @classmethod
    def CadastrarContato(cls):
        while True:
            nome = input("\nNome do contato: ")
            if len(nome) == 0:
                print("Nome não pode ser vazio")
                continue
            break

        while True:
            try:
                telefone = int(input("Telefone: "))
                break
            except (ValueError, TypeError):
                print("Telefone inválido. Por favor, insira um número de telefone válido (apenas números).")
        while True:
            email = input("Email: ")
            if email.count('@') == 1 and email.count('.') >= 1:
                break
            else:
                print("Email inválido. Por favor, insira um email válido.")
        return cls(nome, telefone, email)

    @classmethod
    def ProcurarContato(cls, nome_contato):
        nome_contato = nome_contato.lower().strip()
        encontrados = [
            contato for contato in cls.lista_telefonica if any(
                parte in contato.nome.lower() for parte in nome_contato.split()
            )
        ]
        return encontrados

    def editar(self, nome=None, telefone=None, email=None):
        if nome:
            self.nome = nome
        if telefone:
            self.telefone = telefone
        if email:
            self.email = email

    @classmethod
    def ExcluirContato(cls, contato):
        cls.lista_telefonica.remove(contato)


def ListarOpcoes():
    opcoes_disponiveis = ["Cadastrar Contato", "Listar Contatos", "Procurar Contato", "Limpar Terminal", "Sair"]
    for enum, opcao in enumerate(opcoes_disponiveis):
        print(f"\n {enum + 1}. {opcao}")
    print()

def EscolherOpcao():
    while True:
        ListarOpcoes()
        try:
            escolha = int(input("Escolha uma opção: "))
            match escolha:
                case 1:
                    contato = Contato.CadastrarContato()
                    print(f"\nContato {contato.nome} cadastrado com sucesso!")
                case 2:
                    print('Listando contatos...')
                    Contato.ListarContatos()
                case 3:
                    nome_para_procurar = input("Nome do contato: ")
                    resultados = Contato.ProcurarContato(nome_para_procurar)
                    if resultados:
                        for i, contato in enumerate(resultados, start=1):
                            print(f"{i}. {contato.nome}")
                        escolha_contato = int(input("Escolha o número do contato: ")) - 1
                        contato_selecionado = resultados[escolha_contato]
                        contato_selecionado.exibir()
                        acao = input("Deseja [E]ditar ou [X]cluir o contato? ").strip().lower()
                        if acao == 'e':
                            nome = input("Novo nome (deixe em branco para manter o atual): ") or contato_selecionado.nome
                            telefone = input("Novo telefone (deixe em branco para manter o atual): ") or contato_selecionado.telefone
                            email = input("Novo email (deixe em branco para manter o atual): ") or contato_selecionado.email
                            contato_selecionado.editar(nome, telefone, email)
                            print("Contato editado com sucesso!")
                        elif acao == 'x':
                            Contato.ExcluirContato(contato_selecionado)
                            print("Contato excluído com sucesso!")
                        else:
                            print("Ação inválida.")
                    else:
                        print("Contato não encontrado.")
                case 4:
                    import os
                    os.system('cls' if os.name == 'nt' else 'clear')
                case 5:
                    print("Finalizando programa")
                    break
                case _:
                    print("Opção inválida. Por favor, escolha uma opção válida.")
        except (ValueError, TypeError):
            print("Opção inválida. Por favor, escolha uma opção válida.")
            continue

def main():
    EscolherOpcao()

if __name__ == "__main__":
    main()
