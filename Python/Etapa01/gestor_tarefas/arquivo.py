import json

def salvar_tarefas(lista_tarefas, CAMINHO_ARQUIVO = r"C:\Users\User\Desktop\Estudos\Python\Etapa01\gestor_tarefas\data\tarefas.json"):
    try:
        with open(CAMINHO_ARQUIVO, 'w', encoding='utf-8') as arquivo:
            json.dump(lista_tarefas, arquivo, ensure_ascii=False, indent=4)
    except Exception as e:
        print(f"Erro ao salvar tarefas: {e}")

def carregar_tarefas(CAMINHO_ARQUIVO = r"C:\Users\User\Desktop\Estudos\Python\Etapa01\gestor_tarefas\data\tarefas.json"):
    try:
        with open(CAMINHO_ARQUIVO, "r", encoding="utf-8") as arquivo:
            return json.load(arquivo)
    except FileNotFoundError:
        return []
    except Exception as e:
        print(f"Erro ao carregar tarefas: {e}")
        return []