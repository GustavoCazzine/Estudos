# Lista de Tarefas Simples para treinar Python
import os, time, json
tarefas = []

CAMINHO_ARQUIVO = "Python/Etapa01/ListaTarefas/tarefas.json"


def criar_tarefa():
    try:
        print("\n=== Adicionar Nova Tarefa ===")
        nova_tarefa = input("Digite a descrição da nova tarefa: ")
        if nova_tarefa:
            tarefa = {"descricao": nova_tarefa, "concluida": ' '}
            tarefas.append(tarefa)
            return True
        else:
            print("A tarefa não pode estar vazia!")
            return False
    except ValueError:
        print("Erro: Digite uma descrição válida para a tarefa.")

def salvar_em_arquivo():
    os.makedirs(os.path.dirname(CAMINHO_ARQUIVO), exist_ok=True)
    with open(CAMINHO_ARQUIVO, "w", encoding="utf-8") as arquivo:
        json.dump(tarefas, arquivo, indent=2, ensure_ascii=False)


def carregar_de_arquivo():
    if os.path.exists(CAMINHO_ARQUIVO):
        with open(CAMINHO_ARQUIVO, "r", encoding="utf-8") as arquivo:
            return json.load(arquivo)
    return []  # retorna lista vazia se não houver arquivo

def listar_tarefa():
    print("\n=== Lista de Tarefas ===")
    if not tarefas:
        print("Nenhuma tarefa adicionada.")
    else:
        for e, itens in enumerate(tarefas, start=1):
            print(f"{e}. [{itens['concluida']}] {itens['descricao']}")
    print("=" * 30)

def mudar_status(numero_tarefa):
    for e, itens in enumerate(tarefas, start=1):
        if numero_tarefa == e:
            itens["concluida"] = '✔'

def remover_tarefa(numero_tarefa):
    for e, itens in enumerate(tarefas, start=1):
        if numero_tarefa == e:
            del tarefas[e - 1]

tarefas = carregar_de_arquivo

while True:

    os.system('cls')
    print("=== MENU ===")
    print("=" * 30)
    print("1. Adicionar tarefa")
    print("2. Listar tarefas")
    print("3. Marcar tarefa como concluída")
    print("4. Remover tarefa")
    print("5. Sair")
    print("=" * 30)

    try:
        opcao = int(input("Escolha uma opção: "))
        if opcao:
            match opcao:
                case 1:
                    if criar_tarefa():
                        print("\nNova tarefa adicionada com sucesso!")
                    else:
                        print("\nErro ao adicionar a tarefa, tente novamente.")
                    time.sleep(1)
                case 2:
                    listar_tarefa()
                    time.sleep(2)
                case 3:
                    listar_tarefa()
                    try:
                        tarefa_concluida = int(input("\nQual tarefa deseja marcar como concluída? "))
                        mudar_status(tarefa_concluida)
                        print("\nTarefa concluída com sucesso!")
                    except ValueError:
                        print("\nErro: Digite um número válido.")
                    time.sleep(1)
                case 4:
                    if len(tarefas) == 0:
                        print("Nenhuma tarefa foi adicionada ainda")
                    else:
                        listar_tarefa()
                        try:
                            tarefa_excluir = int(input("\nQual tarefa deseja excluir da lista? "))
                            remover_tarefa(tarefa_excluir)
                            print("\nTarefa excluída com sucesso!")
                        except ValueError:
                            print("\nErro: Digite um número válido.")
                    time.sleep(1)
                case 5:
                    print("\nEncerrando sistema...")
                    break
                case _:
                    print("\nEscolha uma das opções acima.")
    except ValueError:
        print("\nErro: Escolha uma opção entre 1 e 5.")
        time.sleep(1)

    salvar_em_arquivo()
    time.sleep(0.5)