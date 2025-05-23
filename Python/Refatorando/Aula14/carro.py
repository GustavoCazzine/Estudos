class Carro:
    def __init__(self, marca, modelo, cor, combustivel):
        self.marca = marca
        self.modelo = modelo
        self.cor = cor
        self.combustivel = combustivel

        self.ligado = False
        self.velocidade = 0

    def ligar(self):
        if self.ligado:
            print("Carro já está ligado, nada acontece")
        else:
            self.ligado = True
            print(f"{self.modelo} ligado")

    def desligar(self):
        if self.ligado:
            self.ligado = False
            print(f"{self.modelo} Desligado")
        else:
            print("Carro já está desligado, nada acontece")

    def acelerar(self):
        if self.ligado:
            self.velocidade +=1
            print(f"{self.velocidade}km/h")
        else:
            print("Não é possivel acelerar, carro desligado")

    def freiar(self):
        if self.ligado and self.velocidade > 0:
            self.velocidade -=1
            print(f"{self.velocidade}km/h")
        else:
            print("Não é possivel freiar, carro desligado/parado")