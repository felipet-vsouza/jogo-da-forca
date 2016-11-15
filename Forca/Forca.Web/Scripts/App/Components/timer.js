class Timer {
  constructor(onGameOver) {
    this.onGameOver = onGameOver;
    this.count = 20;
    this.renderSelf();
  }

  on() {
    this.setNewInterval();
  }

  off() {
    clearInterval(this.updateHandle);
  }

  resetCount() {
    this.off();
    this.count = 20;
  }

  checkForGameOver() {
    if (this.count <= 0) {
      this.onGameOver();
    }
  }

  setNewInterval() {
    let self = this;
    self.updateHandle = setInterval(function () {
      self.update(self);
    }, 1000);
  }

  update(self) {
    $(".time").text(self.count)
    self.checkForGameOver();
    self.count--;
  }

  renderSelf() {
    forca.render('.timer', 'timer', {
      time: this.count
    });
  }
}