class Jogador {
    listarJogadoresRankeados() {
        $.get('/api/Jogador');
    }

    SalvarJogada() {
        $.post('/api/Jogador', jogador = { Nome: 'jao', Pontuacao: 10, Dificuldade: 0 });
    }
}
