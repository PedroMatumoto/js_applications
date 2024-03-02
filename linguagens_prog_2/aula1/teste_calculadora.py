import calculadora
def main():
    a = 2
    b = 3
    soma = calculadora.soma(a,b)
    print(f'A soma de {a} e {b} é {soma}')
    subtracao = calculadora.substrai(a,b)
    print(f'A subtração de {a} e {b} é {subtracao}')

main()
