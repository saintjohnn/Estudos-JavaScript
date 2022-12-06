// for-in

const pessoa = {
    nome: 'John',
    idade: 20
}
//key-value
for (let chave in pessoa) {
    console.log(chave,pessoa['nome'])
}

const cores = ['vermelho','azul','verde']

for (let indice in cores) {
    console.log(indice,cores[indice ])
}

//for-of
for(let cor of cores) {
    console.log(cor)
}