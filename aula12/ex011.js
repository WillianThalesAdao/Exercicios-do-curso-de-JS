var idade = 10
console.log(`Você tem <strong>${idade}</Strong> anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}