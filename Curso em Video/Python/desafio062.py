#Melhore o desafio 061, perguntando para o usuário se ele quer mostrar mais alguns termos, o programa encerra quanto ele disser que quer mostrar 0 termos.

## Solicita o primeiro termo e a razão ao usuário
primeiro_termo = int(input("Digite o primeiro termo da PA: "))
razao = int(input("Digite a razão da PA: "))

termo = 0
total_termos = 10  # Número inicial de termos a serem exibidos
mostrar_mais = total_termos  # Controla quantos termos o usuário deseja ver

# Exibe os termos da PA enquanto o usuário quiser
while mostrar_mais != 0:
    while termo < total_termos:
        termo_atual = primeiro_termo + termo * razao
        print(f"Termo {termo + 1}: {termo_atual}")
        termo += 1

    # Pergunta se o usuário quer mostrar mais termos
    mostrar_mais = int(input('Quer mostrar mais quantos termos? (Digite 0 para encerrar): '))

    # Adiciona os novos termos ao total, se o usuário quiser ver mais
    total_termos += mostrar_mais

print('Programa finalizado.')
