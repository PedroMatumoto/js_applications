import calculadora
def main():
    a = input('Digite o primeiro número: ')
    b = input('Digite o segundo número: ')
    opcao = calculadora.menu()
    if opcao == '1':
        print('Resultado:', calculadora.soma(a,b))
    elif opcao == '2':
        print('Resultado:', calculadora.substrai(a,b))
    else:
        print('Saindo...')
        

main()
