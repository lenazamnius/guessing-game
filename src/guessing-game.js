class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.medium = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.medium = Math.ceil((this.max + this.min) / 2);
      return this.medium;
    }

    lower() {
      this.max = this.medium;
    }

    greater() {
      this.min = this.medium;
    }
}

module.exports = GuessingGame;
