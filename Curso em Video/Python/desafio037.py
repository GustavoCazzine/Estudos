#Escreva um programa que leia um número inteiro qualquer e peça para o usúario escolher qual será a base de conversão: -1 para binário / -2 para octal / 03 - hexadecimal

#Entrada de dados - escolha do usuario
def decimal_para_binario(n):
    if n == 0:
        return "0"
    binario = ""
    while n > 0:
        resto = n % 2
        binario = str(resto) + binario
        n = n // 2
    return binario

def decimal_para_octal(n):
    if n == 0:
        return "0"
    octal = ""
    while n > 0:
        resto = n % 8
        octal = str(resto) + octal
        n = n // 8
    return octal

def decimal_para_hexadecimal(n):
    if n == 0:
        return "0"
    hexadecimal = ""
    while n > 0:
        resto = n % 16
        if resto >= 10:
            # Converte o resto de 10-15 para A-F
            resto = chr(resto + 55)  # 55 = ord('A') - 10
        else:
            resto = str(resto)
        hexadecimal = resto + hexadecimal
        n = n // 16
    return hexadecimal

# Exemplo de uso:
numero = int(input("Digite um número inteiro: "))

print(f"Binário: {decimal_para_binario(numero)}")
print(f"Octal: {decimal_para_octal(numero)}")
print(f"Hexadecimal: {decimal_para_hexadecimal(numero)}")
