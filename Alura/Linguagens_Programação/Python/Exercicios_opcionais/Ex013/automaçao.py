import pyautogui
import time

pyautogui.PAUSE = .3

# Abrir o google chrome
pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")
time.sleep(1)

# Selecionar perfil e acessar o site
pyautogui.click(x=1016, y=502)
pyautogui.write("https://dlp.hashtagtreinamentos.com/python/intensivao/login")
pyautogui.press('enter')
time.sleep(3)

# logar com email/senha
pyautogui.click(x=2897, y=33)
pyautogui.click(x=2391, y=421)
pyautogui.write('cazzinengustavo@gmail.com')
pyautogui.press('tab')
pyautogui.write('teste159357')
pyautogui.press('enter')
time.sleep(3)

# Passo 3: Importar a base de produtos pra cadastrar
import pandas as pd

tabela = pd.read_csv("produtos.csv")

print(tabela)

# Cadastrar itens
for c in range(0, 5):
    pyautogui.click(x=2266, y=296)
    pyautogui.write('a') #Codigo do produto
    pyautogui.press('tab')
    pyautogui.write('b') #Marca
    pyautogui.press('tab')
    pyautogui.write('c') #Tipo
    pyautogui.press('tab')
    pyautogui.write('d') #Categoria
    pyautogui.press('tab')
    pyautogui.write('e') #Preço unitario
    pyautogui.press('tab')
    pyautogui.write('f') #Custo do produto
    pyautogui.press('tab')
    pyautogui.write('') #Observação
    pyautogui.press('tab')
    pyautogui.press('enter')
    pyautogui.scroll(500)
