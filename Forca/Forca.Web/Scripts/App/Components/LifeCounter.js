class LifeCounter {
    constructor(lifeCount, onGameOver) {
        this.lifeCount = lifeCount;
        this.onGameOver = onGameOver;
    }

    loseHeart() {
        var nthHeart = $(`.heart:nth-of-type(${this.lifeCount})`);
        nthHeart.addClass('beating');
        this.lifeCount--;

        if (heartCounter <= 0) {
            this.onGameOver();
        }
    }
}