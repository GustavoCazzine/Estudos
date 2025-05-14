class Usuario:
    def __init__(self, nome:str, cpf:str, livros_emprestados=None):
        self.nome = nome
        self.cpf = cpf
        self.livros_emprestados = livros_emprestados if livros_emprestados else []

    def __str__(self):
        return f'Nome: {self.nome} - CPF: {self.cpf} Livros Emprestados: {self.livros_emprestados}'
    
    
    @staticmethod
    def cadastrar_usuario():
        while True:
            try:
                nome_usuario = input('Digite o nome do usuário: ').lower().strip()
                if not nome_usuario:
                    raise ValueError("Nome não pode ser vazio.")
                elif len(nome_usuario) <= 3:
                    raise ValueError("Nome deve ter mais de 3 caracteres.")
                else:
                    break
            except ValueError as e:
                print(e)
                continue

        while True:
            try:
                cpf_usuario = input('Digite o CPF do usuário: ').lower().strip()
                if not cpf_usuario:
                    raise ValueError("CPF não pode ser vazio.")
                elif len(cpf_usuario) != 11 or not cpf_usuario.isdigit():
                    raise ValueError("CPF deve conter 11 dígitos numéricos.")
                else:
                    break
            except ValueError as e:
                print(e)
                continue

        usuario = Usuario(nome_usuario, cpf_usuario)
        return usuario
    
