import os, time

def titulo(text):
    print('=' * (len(text) + 5))
    print(text.center(len(text) + 5))
    print('=' * (len(text) + 5))

def listar_menu():
    menu = ["Adicionar tarefa", "Listar tarefas","Concluír tarefa","Excluir tarefa","Sair"]
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

def limpar_tela():
    os.system('cls')

def pausa_segundos(segundos):
    time.sleep(segundos)