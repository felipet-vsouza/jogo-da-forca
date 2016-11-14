class TelaJogo {
    constructor(seletor) {
        this.$elem = $(seletor);
        this.renderizarEstadoInicial();
    }

    mostrarLetras(letra) {
        for (let i = 0; i < this.palavra.palavra.length; i++) {
            if (this.palavra.palavra.toUpperCase().charAt(i) == letra) {
                this.palavra.palavraOculta = this.palavra.palavraOculta.replaceAt(i, letra);
            }
        }
        this.palavra.renderSelf();
        if (this.palavra.palavra.toUpperCase() === this.palavra.palavraOculta.toUpperCase()) {
            this.novaPalavra();
            forca.player.points += forca.player.dificulty;
        }
    }

    letraInserida(letra) {
        if (this.palavra.palavra.toUpperCase().includes(letra)) {
            this.mostrarLetras(letra);
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

    onGameOver() {
        forca.renderizarTela('inicio');
    }

    renderizarEstadoInicial() {
        $('.tela-centralizada').removeClass('tela-centralizada');
        this.$elem.show();
        let self = this;
        let renderizar = forca.render('.tela', 'jogo', {});
        renderizar.then(() => {
            self.registrarBindsEventos();
            self.novaPalavra();
        });
    }

    novaPalavra() {
        let self = this;
        var onGameOver = function () {
            alert(`Game over!!! Palavra correta: ${self.palavra.palavra}`);
            forca.renderizarTela('inicio');
        }
        switch (forca.player.dificulty) {
            case Dificuldade.Normal:
                this.lifeCounter = new LifeCounter(5, onGameOver);
                break;
            case Dificuldade.Bh:
                this.lifeCounter = new LifeCounter(2, onGameOver);
                break;
        }
        this.palavra = new Palavra();
    }
}