def notas(*notas, sit=False):
    '''
        ->Função para analisar notas e situações de vários alunos.
        :param n: uma ou mais notas dos alunos (aceita várias)
        :param sit: (opcional) situação do aluno (True ou False)
        :return: dicionário com várias informações sobre a situação da turma.
    '''

    resp = {
        'total': '0', 'maior': '0', 'menor': '0', 'media': '0'
    }
    # Contador de notas inseridas
    cont = maior = media = 0
    menor = 10
    for v in notas:
        cont += 1
        # Verificando se a nota é maior que a maior nota
        if maior == 0:
            maior = v
        elif v > maior:
            maior = v
        # Verificando se a nota é menor que a maior nota
        if menor == 10:
            menor = v
        elif v < menor:
            menor = v

    # Calculando a média das notas
    media = sum(notas) / cont

    if sit == True:
        if media > 7:
            resp['situação'] = ['ÓTIMO']
        elif media <= 7 and media >= 5:
            resp['situação'] = ['RAZOAVEL']
        else:
            resp['situação'] = ['RUIM']
    resp['total'] = cont
    resp['maior'] = maior
    resp['menor'] = menor
    resp['media'] = media

    return resp


# Programa Principal
resp = notas(3.5, 2, 6.5, 2, 7, 4)
print(resp)
help(notas)
