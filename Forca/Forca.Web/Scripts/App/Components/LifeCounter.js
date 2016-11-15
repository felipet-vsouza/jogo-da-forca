class LifeCounter {
    constructor(lifeCount, onGameOver) {
        this.lifeCount = lifeCount;
        this.onGameOver = onGameOver;
        this.renderSelf();
    }

    loseHeart() {
        var somPerdendoVida = new Audio('../../Content/Effects/blop.mp3');
        var somGameOver = new Audio('../../Content/Effects/gameover.wav');
        if (this.lifeCount > 1) {
            somPerdendoVida.play();
        }

        var nthHeart = $(`.heart:nth-of-type(${this.lifeCount})`);
        nthHeart.addClass('beating');
        this.lifeCount--;

        if (this.lifeCount <= 0) {
            somGameOver.play();
            this.onGameOver();
        }
    }

    renderSelf() {
        forca.render('.lifecounter', 'lifecounter', {
            heartCount: this.lifeCount
        });
    }
}