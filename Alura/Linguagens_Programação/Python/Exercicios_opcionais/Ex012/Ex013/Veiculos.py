from abc import ABC, abstractmethod

class Veiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def __str__(self):
        return f'{self.marca} | {self.modelo}'

    @abstractmethod
    def ligar_veiculo(self):
        pass

    