def voto(ano_nascimento):
    '''
    Verifica a idade de nascimento e retorna a situação do voto.
    OBRIGATORIO/NEGADO/OPCIONAL
    '''

    from datetime import date
    ano_atual = date.today().year
    idade = ano_atual - ano_nascimento
    if idade < 16:
        return print(f'Com {idade} anos: NÃO VOTA')
    elif 16 <= idade < 18 or idade > 65:
        return print(f'Com {idade} anos: VOTO OPCIONAL')
    else:
        return print(f'Com {idade} anos: VOTO OBRIGATÓRIO')


voto(ano_nascimento = int(input('Informe seu ano de nascimento: ')
))
