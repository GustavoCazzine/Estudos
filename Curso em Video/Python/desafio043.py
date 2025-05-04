#Desenvolva uma logica que leia o peso e a altura de uma pessoa, calculo seu IMC e mostre seu status, de acordo com a tabela abaixo: -abaixo de 18.5:Abaixo do Peso / -Entre 18.5 e 25:peso ideal / -25 até 30:Sobrepeso / 30 até 40:Obesidade / -Acima de 40:Obesidade mórbida

#Solicita ao usuario o peso e altura
peso = float(input('Peso (kg): '))
altura = float(input('Altura (m): '))

#Calculo de IMC
imc = peso / (altura ** 2)

#Mostra o resultado

# Mostra o resultado
if imc < 18.5:
    status = 'Abaixo do peso'
elif imc >= 18.5 and imc < 25:  # Corrigido para usar imc
    status = 'Peso ideal'
elif imc >= 25 and imc < 30:  # Corrigido para usar imc
    status = 'Sobrepeso'
elif imc >= 30 and imc < 40:  # Corrigido para usar imc
    status = 'Obesidade'
else:  # Acima de 40
    status = 'Obesidade mórbida'

print(f'Seu imc é {imc:.2f} e seu status é {status}')

