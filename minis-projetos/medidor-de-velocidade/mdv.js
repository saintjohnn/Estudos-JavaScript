// Velocidade maxima de ate 70
// a cada 5km acima do limite voce ganha 1 ponto
// Math.floor() (utilizar para arrendondar o valor numerico)
// Caso pontos maior que 12 = "Carteira Suspensa"

verificarVelocidade(70)

function verificarVelocidade(velocidade) {

    const velocidadeMaxima = 70

    const KmPorPonto = 5
    
    if (velocidade <= velocidadeMaxima) 
        console.log('ok')

    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) /
        KmPorPonto))
        
        if(pontos >= 12)
            console.log('Carteira Suspendida')
        else
            console.log('Pontos',pontos)
    }
}