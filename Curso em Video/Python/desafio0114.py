import urllib
import urllib.request

try:
    site = urllib.request.urlopen('http://www.pudim.com.br')
except:
    print('Erro ao acessar o site.')
else:
    print('Site acessado com sucesso.')
    print(site.read())