from datetime import date

class Tarefa:
    def __init__(self, descricao: str, status=False, data=None):
        self.descricao = descricao.lower()
        self.status = status
        self.data = data if data else date.today().strftime('%d/%m/%Y')

    def marcar_concluida(self):
        if self.status:
            print("Tarefa já está concluída")
        else:
            self.status = True

    def desmarcar(self):
        if not self.status:
                    print("Tarefa já está pendente")
        else:
            self.status = False
    def alternar_status(self):
        self.status = not self.status

    def __str__(self):
        status_str = '[x]' if self.status else '[ ]'
        return f"{status_str} {self.descricao.title()} ({self.data})"

if __name__ == "__main__":
    t1 = Tarefa("Estudar Python")
    print(t1)
    t1.marcar_concluida()
    print(t1)
    t1.marcar_concluida()
    print(t1)
    t1.desmarcar()
    print(t1)
    t1.desmarcar()
    print(t1)
