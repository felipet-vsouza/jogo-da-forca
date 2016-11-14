class TelaJogo {
    constructor(seletor) {
        this.$elem = $(seletor);
        this.renderizarEstadoInicial();
        this.palavra = new Palavra();
    }

    letraInserida(letra) {
        if (this.palavra.palavra.toUpperCase().includes(letra)) {
            this.palavra.mostrarLetras(letra);
        } else {
            this.lifeCounter.loseHeart();
        }
    }

    registrarBindsEventos() {
        let self = this;
        $('body').keydown(p => {
            let event = p.originalEvent;
            if(event.keyCode >= 65 && event.keyCode <= 90) {
                self.letraInserida(event.key.toUpperCase());
            }
        });
    }

    renderizarEstadoInicial() {
        $('.tela-centralizada').removeClass('tela-centralizada');
        this.$elem.show();

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