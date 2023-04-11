var alunos = `
bianca 
marcela
mateus
josiane
amanda
lucas
marcelo
katia
augusto
breno
debora
julio
noeme
fabiana`

var nomesDosAlunos = alunos.trim().toLowerCase().split('\n').map(function(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
});

var nomesOrdenados = bubbleSort(nomesDosAlunos)

function bubbleSort(nomesDosAlunos) {
    var comprimento = nomesDosAlunos.length;
    for (let i = 0 ; i < comprimento; i++) {
        for (let j = 0 ; j < comprimento - i - 1; j ++) {
            if(nomesDosAlunos[j] > nomesDosAlunos[j +1]) {
                var temp = nomesDosAlunos[j];
                nomesDosAlunos[j] = nomesDosAlunos[j + 1]
                nomesDosAlunos[j + 1] = temp;
            }
        }
    }
    return nomesDosAlunos
}
console.log(nomesOrdenados)

