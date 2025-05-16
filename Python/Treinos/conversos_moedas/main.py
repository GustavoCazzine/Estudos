def pegar_dados():
    import requests
    url = "https://open.er-api.com/v6/latest/USD"
    resposta = requests.get(url)
    dados = resposta.json()
    moeda_base = dados['base_code']
    return dados, moeda_base

def calcular_conversao(dados, moeda_converter, quantidade):
    valor_dolar = dados['rates'][moeda_converter]
    valor_convertido = valor_dolar * quantidade
    print(f"\n💱 Cotação atual: 1 USD = {valor_dolar:.2f} {moeda_converter}")
    print(f"💵 {quantidade} USD equivalem a {valor_convertido:.2f} {moeda_converter}\n")

def receber_dados_usuario():
    while True:
        moeda_converter = input("🔎 Digite a moeda que deseja converter (ou 'SAIR' para encerrar): ").upper()
        if moeda_converter == "SAIR":
            return None, None
        if moeda_converter:
            break
        print("⚠️ Entrada inválida. Tente novamente.")

    while True:
        try:
            quantidade = float(input("💲 Digite o valor em USD que deseja converter: "))
            if quantidade <= 0:
                raise ValueError
            break
        except ValueError:
            print("⚠️ Valor inválido. Digite um número positivo.")
    
    return moeda_converter, quantidade

def procurar_moeda(dados, moeda_converter, quantidade):
    if moeda_converter in dados["rates"]:
        calcular_conversao(dados, moeda_converter, quantidade)
    else:
        print("❌ Moeda não encontrada.\n")

def menu():
    print("="*40)
    print("🌎  Bem-vindo ao Conversor de Moedas!  🌎")
    print("="*40)
    print("Digite 'SAIR' a qualquer momento para encerrar o programa.\n")
    opcoes = ('Listar moedas disponíveis', 'Converter moeda')
    for i, opcao in enumerate(opcoes, 1):
        print(f"{i}. {opcao}")
    print("="*40)

def escolher_opcao():
    while True:
        try:
            opcao = int(input("👉 Escolha uma opção: "))
            if opcao not in [1, 2]:
                raise ValueError
            return opcao
        except ValueError:
            print("⚠️ Opção inválida. Tente novamente.")

def limpar_tela():
    import os
    import time
    time.sleep(1.2)
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

def pausa_segundos(segundos):
    import time
    time.sleep(segundos)

def main():
    limpar_tela()
    dados, moeda_base = pegar_dados()
    print(f"\n💲 Moeda base: {moeda_base}\n")
    pausa_segundos(1.5)
    
    while True:
        limpar_tela()
        menu()
        opcao = escolher_opcao()
        limpar_tela()
        match opcao:
            case 1:
                print("📋 Moedas disponíveis:")
                print("-"*30)
                for moeda in dados["rates"]:
                    print(f"• {moeda}")
                continuar = input("Pressiona qualquer tecla para continuar ou 'SAIR' para encerrar: ").upper()
                if continuar == "SAIR":
                    print("\n👋 Encerrando o programa. Até logo!")
                    pausa_segundos(1.5)
                    break
                print("-"*30)
                pausa_segundos(1)

            case 2:
                print("🔄 Conversão de moeda:")
                moeda_converter, quantidade = receber_dados_usuario()
                if moeda_converter is None:
                    print("\n👋 Encerrando o programa. Até logo!")
                    pausa_segundos(1.5)
                    break
                procurar_moeda(dados, moeda_converter, quantidade)

                continuar = input("\nPressiona qualquer tecla para continuar ou 'SAIR' para encerrar: ").upper()
                if continuar == "SAIR":
                    print("\n👋 Encerrando o programa. Até logo!")
                    pausa_segundos(1.5)
                    break
                pausa_segundos(1)

            case _:
                print("⚠️ Opção inválida. Tente novamente.")
                pausa_segundos(1.2)

if __name__ == "__main__":
    main()
