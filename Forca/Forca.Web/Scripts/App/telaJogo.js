class TelaJogo {
    constructor(seletor) {
        this.$elem = $(seletor);
        this.renderizarEstadoInicial();
    }

    registrarBindsEventos() {
    }

    renderizarEstadoInicial() {
        $('.tela-centralizada').removeClass('tela-centralizada');
        this.$elem.show();
        //let self = this;

        /*$.get('/api/herois')
          .done(function (res) {
              let renderizar = forca.render('.tela', 'jogo', {});
              renderizar.then(() => {
                  this.registrarBindsEventos(this);
              })
          }.bind(this));*/
        let self = this;
        let renderizar = forca.render('.tela', 'jogo', {});
        renderizar.then(() => {
            self.registrarBindsEventos();
            var onGameOver = function () {
                alert("Game over!!!");
            }
            switch (forca.player.dificulty) {
                case Dificuldade.Normal:
                    this.lifeCounter = new LifeCounter(5, onGameOver);
                    break;
                case Dificuldade.Bh:
                    this.lifeCounter = new LifeCounter(2, onGameOver);
                    break;
            }
        });
    }
}