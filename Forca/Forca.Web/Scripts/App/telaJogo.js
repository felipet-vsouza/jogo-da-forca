class TelaJogo {
    constructor(seletor) {
        this.$elem = $(seletor);
        this.lifeCounter = new LifeCounter(5); // a quantidade vai depender da dificuldade
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
        })
    }
}