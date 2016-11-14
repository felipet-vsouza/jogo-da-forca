class TelaRanking {

  constructor(seletor) {
    this.$elem = $(seletor);
    this.paginaAtual = 1;
    this.qtdJogadoresPorPagina = 5;
    this.renderizarEstadoInicial();
    this.qtdTotalRegistros;
  }

  registrarBindsEventos(self) {

    self.$btnProximaPagina = $('#btn-proxima-pagina');
    self.$btnProximaPagina.on('click', self.obterProximaPagina.bind(self));

    self.$btnPaginaAnterior = $('#btn-pagina-anterior');
    self.$btnPaginaAnterior.on('click', self.obterPaginaAnterior.bind(self));
      
    if (self.paginaAtual <= 1) {
              self.$btnPaginaAnterior.attr('disabled', true);
            } else {
          self.$btnPaginaAnterior.removeAttr('disabled');
          self.$btnProximaPagina.removeAttr('disabled');
        }
    let ultimaPagina = self.paginaAtual * self.qtdJogadoresPorPagina >= self.qtdTotalRegistros;
    if (ultimaPagina) {
            self.$btnProximaPagina.attr('disabled', true);
          }
           
  }

  obterProximaPagina() {
    this.carregarERenderizarRanking(++this.paginaAtual);
  }

  obterPaginaAnterior() {
    this.carregarERenderizarRanking(--this.paginaAtual);
  }
  
  carregarERenderizarRanking(pagina) {
      Jogador.BuscarJogadoresRankeados(this.paginaAtual).done(function (res) {
          this.qtdTotalRegistros = res.qtd;
      this.renderizarRanking(res).then(() => {
        this.registrarBindsEventos(this);
      })
    }.bind(this));
  }

  renderizarRanking(res) {
    return new Promise((resolve, reject) => {
        forca.render('.tela', 'LeaderBoard', {
            chars: res.registros.map(function (jogador) {
          return {
            Nome: jogador.nome,
            Pontuacao: jogador.pontuacao
          }
        })
      }).then(p => resolve());
    });
    }

  renderizarEstadoInicial(paginaAtual) {
      $('.tela-centralizada').removeClass('tela-centralizada');
      this.$elem.show();
      this.paginaAtual;
      this.carregarERenderizarRanking(this.pagina);
    }
}