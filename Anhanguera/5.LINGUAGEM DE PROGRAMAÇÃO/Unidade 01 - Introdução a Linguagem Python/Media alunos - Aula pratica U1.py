# Uma Lista vazia para armazenar as notas
notas = []

# Pergunta ao usuário quantas notas ele quer inserir
quantidade = int(input("Quantas notas você quer inserir? "))

# Loop para inserir as notas de acordo com a quantidade pedida acima
for i in range(quantidade):
    nota = float(input(f"Digite a nota do aluno {i+1}: "))
    notas.append(nota)  # Adiciona a nota à lista

# Calcula a média das notas
if len(notas) > 0:
    media = sum(notas) / len(notas)

    # Relatório final
    print("\n----- RELATÓRIO FINAL -----")
    print("Notas inseridas:", notas)
    print(f"Média das notas: {media:.2f}")

    # Verifica a situação do aluno
    if media >= 7.0:
        print("Situação: Aluno aprovado!")
    else:
        print("Situação: Aluno reprovado!")
    print("----------------------------")
else:
    print("Nenhuma nota foi inserida.")
