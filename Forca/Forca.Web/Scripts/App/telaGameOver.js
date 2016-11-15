﻿class TelaGameOver {

    constructor(seletor) {
        this.$elem = $(seletor);
        this.renderizarEstadoInicial();
    }

    renderizarEstadoInicial() {
        $('.tela-centralizada').removeClass('tela-centralizada');
        this.$elem.show();

        let self = this;
        let renderizar = forca.render('.tela', 'game-over', {});
        renderizar.then(() => {
            self.registrarBindsEventos();
            self.$btnSubmit.attr('disabled', !self.$formNome.valid());
        });
    }
}