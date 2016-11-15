class MainMenu {
    constructor() {
        this.$elem = $('.mainMenu');
        this.registrarBindsEventos();
    }

    registrarBindsEventos() {
        this.$leaderboardButton = $('.leaderboardButton');
        this.$newGameButton = $('.newGameButton');
        this.$resetarPalavrasButton = $('.resetarPalavras');
        this.$ultimosJogadoresButton = $('.ultimosJogadores');

        this.$leaderboardButton.click(function () {
            forca.renderizarTela('LeaderBoard');
        });

        this.$ultimosJogadoresButton.click(function () {
          forca.renderizarTela('grafico');
        });

        this.$resetarPalavrasButton.click(this.resetarLocalStorageDePalavras);

        this.$newGameButton.click(function () {
            if (!!forca.subtela.palavra) {
                forca.salvarJogador();
                forca.player.points = 0;
                forca.renderizarTela('jogo');
            } else {
                forca.renderizarTela('inicio');
            }
        });
    }

    resetarLocalStorageDePalavras() {
        localStorage.clear();
    }
}