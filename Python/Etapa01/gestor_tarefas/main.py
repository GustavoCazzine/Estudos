import time, os, tarefa, arquivo, utils

def main():
    tarefas = arquivo.carregar_tarefas()
    while True:
        utils.limpar_tela()
        utils.titulo("Gestor de Tarefas")
        utils.listar_menu()
        opcao = utils.escolher_opcao()
        match opcao:
            case 1:
                tarefa.criar_tarefa(tarefas)

                utils.pausa_segundos(1)
            case 2:
                tarefa.listar_tarefa(tarefas)

                utils.pausa_segundos(2)
            case 3:
                tarefa.mudar_status(tarefas)

                utils.pausa_segundos(1)
            case 4:
                tarefa.excluir_tarefa(tarefas)

                utils.pausa_segundos(1)
            case 5:
                print("Finalizando sistema...")

                utils.pausa_segundos(1)
                break
            case _:
                print("Escolha uma opção válida.")

                utils.pausa_segundos(1)

        arquivo.salvar_tarefas(tarefas)
        utils.pausa_segundos(1)

if __name__ == '__main__':
    main()