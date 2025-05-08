import time, os

def titulo(text):
    print('=' * (len(text) + 5))
    print(text.center(len(text) + 5))
    print('=' * (len(text) + 5))

def listar_menu():
    menu = ["Adicionar tarefa", "Listar tarefas","Concluír tarefa","Sair"]
    for e, opcoes in enumerate(menu, start=1):
        print(f"{e}. {opcoes}")

def escolher_opcao():
    while True:
        try:
            opcao = int(input("\nEscolha uma opção: "))
            return opcao

        except ValueError:
            print("Insira um valor númerico referente a opção que deseja.")
        except:
            print("Erro inesperado, tente novamente")

def criar_tarefa(lista_tarefas):
    nova_tarefa = dict()
    while True:
        try:
            nova_tarefa["descricao"] = input("Tarefa: ").lower()
            nova_tarefa["status"] = False
            if len(nova_tarefa["descricao"]) < 3:
                print("\nDescreva a tarefa que deseja criar")
            else:
                lista_tarefas.append(nova_tarefa)
                return print(f'Tarefa - {nova_tarefa["descricao"]} - criada com sucesso!')
        except ValueError:
            print("Descreva a tarefa que deseja criar")
        except:
            print("Erro inesperado")

def listar_tarefa(lista_tarefas):
    if not lista_tarefas:
        print("Nenhuma tarefa cadastrada ainda.")
    else:
        for e, itens in enumerate(lista_tarefas, start=1):
            print(f"{e}. {'[x]' if itens['status'] else '[ ]'} {itens['descricao'].title()}")

def mudar_status(lista_tarefas):
    listar_tarefa(lista_tarefas)

    if len(lista_tarefas) > 0:
        while True:
            try:
                opcao_alterar = int(input("\nQual tarefa deseja alterar: "))

                for e, itens in enumerate(lista_tarefas, start=1):
                    if opcao_alterar == e:
                        itens['status'] = not itens['status']  # Inverte o status
                        alteracao = "Concluído" if itens['status'] else "Pendente"
                        print(f"Tarefa - {itens['descricao'].title()} - alterado para {alteracao} com sucesso!")
                        break 
                else:
                    print("Opção inválida. Tente novamente.")
                    continue

                break
            except ValueError:
                print("Entrada inválida. Digite um número.")


def main():
    tarefas = list()
    while True:
        os.system('cls')
        titulo("Gestor de Tarefas")
        listar_menu()
        opcao = escolher_opcao()
        match opcao:
            case 1:
                criar_tarefa(tarefas)

                time.sleep(2)
            case 2:
                listar_tarefa(tarefas)

                time.sleep(2)
            case 3:
                mudar_status(tarefas)

                time.sleep(2)
            case 4:
                print("Finalizando sistema...")

                time.sleep(1)
                break
            case _:
                print("Escolha uma opção válida.")

                time.sleep(1)


if __name__ == '__main__':
    main()