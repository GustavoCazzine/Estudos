#open("Caminho", "r")

# r - leitura
# a - append / incrementar
# m - escrita
# x - criar arquivo
# r+ - leitura + escrita

# .readable() - verificar se pode ser lido
# .read() - retorna todo o conteudo do arquivo
# .readline() - leitura dá primeira linha do arquivo
# .readlines() - leitura das linhas do arquivo
# .write() - escreve no final dos conteudos

# arquivo = open("Python/Refatorando/teste2.txt", "x")

# # lista = arquivo.readlines()

# # print(lista)

# arquivo.write('C\n')
# arquivo.write('C++\n')
# arquivo.write('Kotlin\n')

# arquivo.close()


# --APAGAR ITENS--

# os.path.exists() - verifica se item existe naquele caminho / True - False
# .remove() - remove arquivo expecificado pelo caminho
# .rmdir() - remove pasta (se vazia)
import os

# if os.path.exists('Python/Refatorando/teste2.txt'):
#     os.remove('Python/Refatorando/teste2.txt')
# else:
#     print("Arquivo não existe")

os.rmdir("Python/Refatorando/novapasta")