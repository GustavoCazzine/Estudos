import datetime

# Obtendo o ano atual
ano_atual = datetime.datetime.now().year
print(f"O ano atual é: {ano_atual}")

# Entrada de dados - ano de nascimento
nascimento = input('Ano de nascimento: ')

# Verifica se a entrada é um número e se tem 4 dígitos
if nascimento.isdigit() and len(nascimento) == 4:
    nascimento = int(nascimento)  # Converte para inteiro
    # Calculando a idade
    idade = ano_atual - nascimento
    anos = ''

    # Lógica de alistamento
    if idade == 18:
        print('Está na hora de você se alistar ao serviço militar, é obrigatório!')
    elif idade < 18:
        anos = 18 - idade
        print(f'Você ainda é jovem, mas em {anos} anos, deverá se alistar ao serviço militar, não se esqueça.')
    else:
        anos = idade - 18  # Calcula há quantos anos deveria ter se alistado
        alistado = input('Você já se alistou para o serviço militar? [Sim/Não] ')
        if alistado.lower() in ['não', 'nao']:
            print(f'Você deveria ter se alistado há {anos} anos atrás para o alistamento militar, faça isso imediatamente e evite problemas com a justiça.')
        else:
            print('Parabéns, você está de acordo com a legislação brasileira!')
else:
    print('Você digitou um ano incorreto, tente novamente!')
