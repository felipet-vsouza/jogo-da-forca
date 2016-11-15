﻿class TelaJogo {
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
        if (this.palavra.palavraDescoberta()) {
            this.turnTimerOff();
            this.novaPalavra();
            forca.player.points += 1;
        }
    }

    desabilitarBodykeyDown() {
        $('body').off('keydown');
    }

    habilitarBodykeyDown() {
        $('body').on('keydown');
        this.capturarTeclasPressionadas();
    }

    chutarPalavra() {
        let palavraChutada = $('#inputPalpite').val();
        if (this.palavra.palavra.toUpperCase() === palavraChutada.toUpperCase()) {
            this.novaPalavra();
            forca.player.points += 2;
        } else {
            this.onGameOver();
        }
    }

    letraInserida(letra) {
        if (this.palavra.palavra.toUpperCase().includes(letra)) {
            this.mostrarLetras(letra);
            if(!!this.timer)
                this.timer.resetCount()
        } else {
            this.lifeCounter.loseHeart();
        }
    }

    capturarTeclasPressionadas() {
        $('body').keydown(p => {
            let event = p.originalEvent;
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                this.letraInserida(event.key.toUpperCase());
            }
        });
    }

    registrarBindsEventos(self) {
        self.$inputPalpite = $('#inputPalpite');
        self.$btnPalpitar = $('.palpitar');
        self.$inputPalpite.focusin(this.desabilitarBodykeyDown);
        self.$inputPalpite.focusout(this.habilitarBodykeyDown.bind(this));
        self.$btnPalpitar.on('click', self.chutarPalavra.bind(this));

        $('body').keydown(p => {
            let event = p.originalEvent;
            if (event.keyCode >= 65 && event.keyCode <= 90) {
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
            self.registrarBindsEventos(this);
            self.novaPalavra();
        });
    }

    novaPalavra() {
        let self = this;
        var onGameOver = function () {
            self.turnTimerOff();
            forca.renderizarTela('game-over');
        }
        var onRenderSuccessful = function () {
            if(!!self.timer && !self.palavra.palavraDescoberta())
                self.timer.on();
        }
        switch (forca.player.dificulty) {
            case Dificuldade.Normal:
                this.lifeCounter = new LifeCounter(5, onGameOver);
                break;
            case Dificuldade.Bh:
                this.lifeCounter = new LifeCounter(2, onGameOver);
                this.timer = new Timer(onGameOver);
                break;
        }
        this.palavra = new Palavra(onRenderSuccessful);
    }

    turnTimerOff() {
        if (!!this.timer)
            this.timer.resetCount();
    }
}