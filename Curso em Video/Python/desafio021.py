import pygame

# Inicializa o mixer de som do pygame
pygame.mixer.init()

# Carrega o arquivo MP3
pygame.mixer.music.load('de-copao-na-mao-estourado.mp3')

# Reproduz o arquivo MP3
pygame.mixer.music.play()

# Mantém o programa em execução enquanto o áudio é reproduzido
input("Pressione ENTER para parar a reprodução.")


