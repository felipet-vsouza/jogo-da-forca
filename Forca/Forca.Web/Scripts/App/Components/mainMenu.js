class MainMenu {
    constructor() {
        this.$elem = $('.mainMenu');
        this.registrarBindsEventos();
    }

    registrarBindsEventos() {
        this.$leaderboardButton = $('.leaderboardButton');
        this.$newGameButton = $('.newGameButton');

        this.$leaderboardButton.click(function () {
            forca.renderizarTela('LeaderBoard');
        });

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
}