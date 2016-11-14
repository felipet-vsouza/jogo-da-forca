class TelaRanking {

    constructor(seletor, dificuldade) {
        this.dificuldade = dificuldade || 1;
        this.$elem = $(seletor);
        this.paginaAtual = 1;
        this.qtdJogadoresPorPagina = 5;
        this.renderizarEstadoInicial(dificuldade);
        this.qtdTotalRegistros;
  }

    renderizarJogadoresDificuldadeBh() {
        return new TelaRanking('#telaRanking', 2)
    }

    renderizarJogadoresDificuldadeNormal() {
        return new TelaRanking('#telaRanking', 1)
    }

  registrarBindsEventos(self) {

    self.$btnProximaPagina = $('#btn-proxima-pagina');
    self.$btnProximaPagina.on('click', self.obterProximaPagina.bind(self));

    self.$btnPaginaAnterior = $('#btn-pagina-anterior');
    self.$btnPaginaAnterior.on('click', self.obterPaginaAnterior.bind(self));

    self.$btndificuldadeNormal = $('#btn-dificuldade-normal');
    self.$btndificuldadeNormal.on('click', self.renderizarJogadoresDificuldadeNormal.bind(self));

    self.$btndificuldadeBh = $('#btn-dificuldade-bh');
    self.$btndificuldadeBh.on('click', self.renderizarJogadoresDificuldadeBh.bind(self));
      
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
    this.paginaAtual++;
    this.carregarERenderizarRanking(this.dificuldade);
  }

  obterPaginaAnterior() {
      this.paginaAtual--;
      this.carregarERenderizarRanking(this.dificuldade);
  }
  
  carregarERenderizarRanking(dificuldade) {
      Jogador.BuscarJogadoresRankeados(this.paginaAtual, dificuldade).done(function (res) {
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

  renderizarEstadoInicial(dificuldade) {
      $('.tela-centralizada').removeClass('tela-centralizada');
      this.$elem.show();
      this.paginaAtual;
      this.carregarERenderizarRanking(dificuldade);
    }
}