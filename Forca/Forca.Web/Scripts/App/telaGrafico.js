class TelaGrafico {
  constructor(seletor) {
    this.$elem = $(seletor);
    this.carregarERenderizarJogadores();
  }

  carregarERenderizarJogadores() {
    Jogador.BuscarUltimosJogadores().done(function (res) {
      this.renderizarRanking().then(p => {

        var myChart = this.setNewChart(res);

      });
    }.bind(this));
  }

  renderizarRanking() {
    return new Promise((resolve, reject) => {
      forca.render('.tela', 'grafico', {}).then(p => resolve());
    });
  }

  renderizarEstadoInicial(dificuldade) {
    $('.tela-centralizada').removeClass('tela-centralizada');
    this.$elem.show();
    this.paginaAtual;
    this.carregarERenderizarRanking(dificuldade);
  }

  setNewChart(res) {
    let canvas = $('.ultimos');
    let nomes = res.registros.map(p => p.nome);
    let pontos = res.registros.map(p => p.pontuacao);
    return new Chart(canvas, {
      type: 'bar',
      data: {
        labels: nomes,
        datasets: [{
          label: 'pontos por jogador',
          data: pontos,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(125, 216, 170, 0.2)',
              'rgba(216, 170, 125, 0.2)',
              'rgba(121, 194, 199, 0.2)',
              'rgba(197, 127, 235, 0.2)',
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(125, 216, 170, 1)',
              'rgba(216, 170, 125, 1)',
              'rgba(121, 194, 199, 1)',
              'rgba(197, 127, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}