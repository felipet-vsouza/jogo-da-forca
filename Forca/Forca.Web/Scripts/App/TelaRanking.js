class TelaRanking {
    constructor(seletor) {
        this.$elem = $(seletor);
        this.renderizarEstadoInicial();
    }

    registrarBindsEventos() {
    }

    renderizarEstadoInicial() {
        $('.tela-centralizada').removeClass('tela-centralizada');
        this.$elem.show();
        let self = this;
        Jogador.BuscarJogadoresRankeados().then(function (res) {
            let renderizar = forca.render('.tela', 'LeaderBoard', {
                chars: res.map(function (jogador) {
                    return {
                        Nome: jogador.nome,
                        Pontuacao: jogador.pontuacao
                    }
                }
              )
            });
            renderizar.then(() => {
                self.registrarBindsEventos();
            })
        })
        
    }
}