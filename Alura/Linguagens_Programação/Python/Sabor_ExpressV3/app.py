from modelos.restaurante import Restaurante
from modelos.cardapio.bebida import Bebida
from modelos.cardapio.prato import Prato
from modelos.cardapio.sobremesa import Sobremesa

restaurante_praca = Restaurante('praça', 'Gourmet')
bebida_suco = Bebida('Suco de Melancia', 5.00, 'Grande')
bebida_suco.aplicar_desconto()
prato_paozinho = Prato('Paozinho', 2.00, 'Melhor pão da cidade')
prato_paozinho.aplicar_desconto()
doce_brigadeiro = Sobremesa('Brigadeiro', 3.00, 'Melhor sobremesa da cidade', 'Chocolate', 'Pequeno')
restaurante_praca.adicionar_no_cardapio(bebida_suco)
restaurante_praca.adicionar_no_cardapio(prato_paozinho)
restaurante_praca.adicionar_no_cardapio(doce_brigadeiro)


def main():
    restaurante_praca.exibir_cardapio

if __name__ == '__main__':
    main()