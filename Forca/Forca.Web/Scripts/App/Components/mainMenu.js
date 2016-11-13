class MainMenu {
    constructor() {
        this.$elem = $('.mainMenu');
        this.registrarBindsEventos();
    }

    registrarBindsEventos() {
        this.$leaderboardButton = $('.leaderboardButton');
        this.$newGameButton = $('.newGameButton');

        this.$leaderboardButton.click(function () {
            forca.renderizarTela('leaderboard');
        });

        this.$newGameButton.click(function () {
            forca.renderizarTela('inicio');
        });
    }
}