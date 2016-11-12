class LifeCounter {
    constructor(lifeCount, onGameOver) {
        this.lifeCount = lifeCount;
        this.onGameOver = onGameOver;
    }

    loseHeart() {
        var nthHeart = $(`.heart:nth-of-type(${heartCounter})`);
        nthHeart.addClass('beating');
        heartCounter--;

        if (heartCounter <= 0) {
            this.onGameOver();
        }
    }
}