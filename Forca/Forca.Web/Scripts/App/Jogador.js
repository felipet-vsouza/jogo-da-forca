var Jogador = {};

Jogador.SalvarJogada = function(jogador){
    $.post('/api/Jogador', jogador);
}   
      
Jogador.BuscarJogadoresRankeados = function (paginaAtual) {
    return $.get('/api/Jogador', { pagina: paginaAtual });
}

class Player {
    constructor() {
        this.name = undefined;
        this.points = 0;
        this.dificulty = 0;
    }
}