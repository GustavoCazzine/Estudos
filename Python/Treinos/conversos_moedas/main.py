import requests
import os
import time


def pegar_dados():
    try:
        url = "https://open.er-api.com/v6/latest/USD"
        resposta = requests.get(url, timeout=5)
        resposta.raise_for_status()
        dados = resposta.json()
        moeda_base = dados['base_code']
        return dados, moeda_base
    except requests.RequestException:
        print("❌ Erro de conexão com a API.")
    except KeyError:
        print("❌ Estrutura dos dados recebidos da API está incorreta.")

        return None, None

def hora_atualizacao(dados):
    print(f"🕒 Última atualização: {dados['time_last_update_utc']}")



def atualizar_cotacao():
    dados, moeda_base = pegar_dados()
    if dados is None:
        print("❌ Erro ao atualizar a cotação.")
    else:
        print("🔄 Cotação atualizada!")
        print(f"🕒 Última atualização: {dados['time_last_update_utc']}")
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
    opcoes = ('Listar moedas disponíveis', 'Converter moeda', 'Atualizar cotação', 'Sair')
    for i, opcao in enumerate(opcoes, 1):
        print(f"{i}. {opcao}")
    print("="*40)

def escolher_opcao():
    while True:
        try:
            opcao = int(input("👉 Escolha uma opção: "))              
            if opcao not in [1, 2, 3, 4]:
                raise ValueError
            return opcao
        except ValueError:
            print("⚠️ Opção inválida. Tente novamente.")

def limpar_tela():
    time.sleep(1.2)
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

def pausa_segundos(segundos):
    import time
    time.sleep(segundos)

def sair(continuar):
    if continuar == "SAIR":
        print("\n👋 Encerrando o programa. Até logo!")
        pausa_segundos(1.5)
        return True
    return False

    
def listar_moedas(dados):
    print("📋 Moedas disponíveis:")
    print("-"*40)
    moedas = sorted(dados["rates"])
    for i, moeda in enumerate(moedas, 1):
        print(f"{moeda.ljust(6)}", end=" ")
        if i % 5 == 0:
            print()
    print("\n" + "-"*40)



def main():
    limpar_tela()
    dados, moeda_base = pegar_dados()
    if dados is None:
        print("⛔ Não foi possível iniciar o programa.")
        return

    print(f"\n💲 Moeda base: {moeda_base}\n")
    hora_atualizacao(dados)
    pausa_segundos(1.5)

    while True:
        limpar_tela()
        menu()
        opcao = escolher_opcao()
        limpar_tela()
        match opcao:
            case 1:
                listar_moedas(dados)
                continuar = input("Pressiona qualquer tecla para continuar ou 'SAIR' para encerrar: ").upper()
                if sair(continuar):
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
                if sair(continuar):
                    break
                pausa_segundos(1)

            case 3:
                dados, moeda_base = atualizar_cotacao()
                print(f"🕒 Última atualização: {dados['time_last_update_utc']}")
                continuar = input("\nPressiona qualquer tecla para continuar ou 'SAIR' para encerrar: ").upper()
                if sair(continuar):
                    break
                pausa_segundos(1)

            case 4:
                print("\n👋 Encerrando o programa. Até logo!")
                pausa_segundos(1.5)
                break

            case _:
                print("⚠️ Opção inválida. Tente novamente.")
                pausa_segundos(1.2)

if __name__ == "__main__":
    main()
