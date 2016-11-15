var Jogador = {};

Jogador.SalvarJogada = function(jogador){
    $.post('/api/Jogador', jogador).catch((err) => {
        console.error('Erro na comunicação com o servidor');
        console.error(`${err.responseJSON.code} - ${err.responseJSON.message}`);
    });
}   
      
Jogador.BuscarJogadoresRankeados = function(paginaRequisitada, nivelDificuldade){
    return $.get('/api/Jogador', { pagina: paginaRequisitada, dificuldade: nivelDificuldade })
    .catch((err) => {
        console.error('Erro na comunicação com o servidor');
        console.error(`${err.responseJSON.code} - ${err.responseJSON.message}`);
    });
}

class Player {
    constructor() {
        this.name = undefined;
        this.points = 0;
        this.dificulty = 0;
    }
}