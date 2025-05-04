from interface import *


def arquivoExiste(nome):
    try:
        a = open(nome, 'rt')
        a.close
    except FileNotFoundError:
        return False
    else:
        return True


def criarArquivo(nome):
    try:
        a = open(nome, 'wt+')
        a.close()
    except:
        print('Erro ao criar arquivo')
    else:
        print(f'Arquivo {nome} criado com sucesso')


def lerArquivo(nome):
    try:
        with open(nome, 'rt') as a:
            cabeçalho('PESSOAS CADASTRADAS')
            for linha in a:
                dado = linha.split(';')
                dado[1] = dado[1].replace('\n', '')
                print(f'{dado[0]:<20}{dado[1]:<20}')
    except FileNotFoundError:
        print('Erro: Arquivo não encontrado')
    except Exception as e:
        print(f'Erro ao ler arquivo: {e}')



def cadastrar(arq, nome='desconhecido', idade=0):
    try:
        a = open(arq, 'at')
    except:
        print('Erro ao abrir arquivo')
    else:
        try:
            a.write(f'{nome},{idade}\n')
        except:
            print('Erro ao escrever arquivo')
        else:
            print(f'Novo registro de {nome} adicionado')
            a.close()
