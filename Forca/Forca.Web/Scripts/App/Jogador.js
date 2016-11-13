Jogador = {}

Jogador.SalvarJogada = function(jogador){
    $.post('/api/Jogador', jogador);
}   
      
Jogador.BuscarJogadoresRankeados = function(){
         return $.get('/api/Jogador');
}


Jogador.BuscarJogadoresRankeados().done(res => console.log(res));
 
console.log("asdsadsadsa")