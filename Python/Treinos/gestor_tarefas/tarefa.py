from datetime import date
from tarefa_objeto import Tarefa

def criar_tarefa(lista_tarefas):
    while True:
        try:
            descricao = input("Tarefa: ").lower()
            if len(descricao["descricao"]) < 3:
                print("\nDescreva a tarefa com mais de 3 caracteres.")
            else:
                nova_tarefa = Tarefa(descricao)
                lista_tarefas.append(nova_tarefa)
                return print(f'Tarefa - {nova_tarefa.descricao.title()} - criada com sucesso!')
                break
        except ValueError:
            print("Descreva a tarefa que deseja criar")
        except:
            print("Erro inesperado")

def listar_tarefa(lista_tarefas):
    if not lista_tarefas:
        print("Nenhuma tarefa cadastrada ainda.")
    else:
        for e, tarefa in enumerate(lista_tarefas, start=1):
            print(f"{e}. {tarefa}")


def mudar_status(lista_tarefas):
    listar_tarefa(lista_tarefas)
    if lista_tarefas:
        while True:
            try:
                indice = int(input("\nQual tarefa deseja alterar: ")) - 1
                if 0 <= indice < len(lista_tarefas):
                    lista_tarefas[indice].alternar_status()
                    status = "Concluída" if lista_tarefas[indice].status else "Pendente"
                    print(f"Tarefa alterada para {status} com sucesso!")
                    break
                else:
                    print("Número inválido.")
            except ValueError:
                print("Digite um número válido.")


def excluir_tarefa(lista_tarefas):
    listar_tarefa(lista_tarefas)
    if lista_tarefas:
        while True:
            try:
                indice = int(input("\nQual tarefa deseja excluir: ")) - 1
                if 0 <= indice < len(lista_tarefas):
                    tarefa_removida = lista_tarefas.pop(indice)
                    print(f"Tarefa - {tarefa_removida.descricao.title()} - excluída com sucesso!")
                    break
                else:
                    print("Número inválido.")
            except ValueError:
                print("Digite um número válido.")



