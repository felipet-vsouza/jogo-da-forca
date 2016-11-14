var Jogador = {};

Jogador.SalvarJogada = function(jogador){
    $.post('/api/Jogador', jogador);
}   
      
Jogador.BuscarJogadoresRankeados = function(paginaRequisitada){
  return $.get('/api/Jogador', {pagina: paginaRequisitada});
}

class Player {
    constructor() {
        this.name = undefined;
        this.points = 0;
        this.dificulty = 0;
    }
}