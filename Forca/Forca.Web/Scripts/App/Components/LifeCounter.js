class LifeCounter {
    constructor(lifeCount, onGameOver) {
        this.lifeCount = lifeCount;
        this.onGameOver = onGameOver;
    }

    loseHeart() {
        var nthHeart = $(`.heart:nth-of-type(${this.lifeCount})`);
        nthHeart.addClass('beating');
        this.lifeCount--;

        if (this.lifeCount <= 0) {
            this.onGameOver();
        }
    }
}