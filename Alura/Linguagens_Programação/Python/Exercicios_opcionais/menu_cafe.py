def Linha(texto): #Cria uma linha de texto
    print(f"\n{'-' * (len(texto) + 25)}\n")  

def Titulo(texto): #Cria um título com o texto
    Linha(texto)
    texto = texto.upper().strip()
    print(f'{texto.center(len(texto) + 25)}')
    Linha(texto)

class MenuCafe: #Classe para o menu de café
    ListaMenu = list() #Lista para armazenar os itens do menu

    def __init__(self, nome, preco): #Método construtor
        self.nome = nome 
        self.preco = float(preco)
        self._disponivel = False
        self.ListaMenu.append(self) #Adiciona o item ao menu

    def __str__(self): #Método para exibir o item do menu
        return f'{self.nome} - R${self.preco:.2f}'
    
    @classmethod 
    def ListarMenu(cls): #Método para listar o menu
        try:
            if len(cls.ListaMenu) == 0:
                print('\nNenhum item no menu')
            else:
                header = f"{'Item'.ljust(20)} | {'Preço'.ljust(10)} | {'Disponível'}"
                print(header)
                print("-" * len(header))
                for item in cls.ListaMenu:
                    nome_formatado = f'{item.nome[:20].ljust(20)}'  
                    preco_formatado = f"{item.preco:.2f}".ljust(10).replace('.', ',') 
                    print(f'{nome_formatado} | R${preco_formatado} | {item.disponivel}')
        except Exception as e:
            print(f"Ocorreu um erro ao listar o menu: {e}")


    @classmethod
    def LocalizarItem(cls, nome_item): #Método para localizar um item no menu
        nome_item = nome_item.lower().strip()
        encontrados = [
            item for item in cls.ListaMenu if nome_item in item.nome.lower()
        ]
        return encontrados

    @classmethod
    def AlterarStatus(cls): #Método para alterar o status de disponibilidade de um item
        nome_item = input("Digite o nome do item para alterar o status: ").strip()
        encontrados = cls.LocalizarItem(nome_item)

        if not encontrados:
            print("\nNenhum item encontrado com esse nome.")
            return

        print("\nItens encontrados:")
        for idx, item in enumerate(encontrados, start=1):
            print(f"{idx}. {item}")

        try:
            escolha = int(input("\nEscolha o número do item para alterar o status: "))
            if 1 <= escolha <= len(encontrados):
                item_selecionado = encontrados[escolha - 1]
                item_selecionado._disponivel = not item_selecionado._disponivel
                print(f"\nStatus do item '{item_selecionado.nome}' alterado para: {item_selecionado.disponivel}")
            else:
                print("Escolha inválida.")
        except (ValueError, IndexError, TypeError):
            print("Entrada inválida. Por favor, digite um número.")
        
    @classmethod
    def AdicionarItem(cls): #Método para adicionar um item ao menu
        while True:
            nome = input('\nNome: ').capitalize().strip()
            if nome:
                if any(item.nome.lower() == nome.lower() for item in cls.ListaMenu):
                    print("Esse item já está no menu. Tente outro nome.")
                else:
                    break
            else:
                print('Digite um nome válido')

        while True: 
            preco = input('Preço: R$')
            preco = preco.replace(',', '.')
            try:
                preco_float = float(preco)
                if preco_float < 0:
                    print('Preço inválido. Por favor, digite um valor positivo')
                else:
                    break
            except (ValueError, TypeError):
                print('Digite um preço válido')

        cls(nome, preco)
        print(f'\n{nome} adicionado ao menu com sucesso!')

    @property
    def disponivel(self): #Método para verificar se o item está disponível
        return '✅' if self._disponivel else '❌'


def ListarOpcoes(): #Método para listar as opções do menu
    Titulo('Menu Café')
    print('1 - Listar Menu \n2 - Adicionar Item \n3 - Alterar Status \n4 - Sair')

def Opcoes(): #Método para realizar as opções do menu
    while True:
        ListarOpcoes()
        try:
            opcao = int(input('Escolha uma opção: '))
            match opcao:
                case 1:
                    MenuCafe.ListarMenu()
                case 2:
                    MenuCafe.AdicionarItem()
                case 3:
                    MenuCafe.AlterarStatus()
                case 4:
                    print('Finalizando cardápio')
                    break
                case _:
                    print('Opção inválida')
                    continue

        except (TypeError, ValueError):
            print('Digite um valor númerico que corresponde a uma opção')

def main(): #Método principal
    Opcoes() #Chamada do método Opcoes()

if __name__ == "__main__": #Verificação se o arquivo está sendo executado diretamente
    main()
