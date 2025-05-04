# Solicita ao usuário que insira um número inteiro
numero = int(input("Digite um número inteiro: "))

# Calcula o dobro, triplo e raiz quadrada
dobro = numero * 2
triplo = numero * 3
raiz_quadrada = numero ** (1/2)

# Exibe os resultados
print(f"O dobro de {numero} é {dobro}")
print(f"O triplo de {numero} é {triplo}")
print(f"A raiz quadrada de {numero} é {raiz_quadrada:.2f}")
