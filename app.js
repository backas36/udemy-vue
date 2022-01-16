const getRandomValue = (max, min) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      result: null,
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //draw
        this.result = "draw";
      } else if (value <= 0) {
        //Player lost
        this.result = "Monster";
      } else {
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //draw
        this.result = "draw";
      } else if (value <= 0) {
        //Monster lost
        this.result = "Player";
      } else {
      }
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
    },
    // every three round available
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(25, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healVaule = getRandomValue(20, 8);
      if (this.playerHealth + healVaule > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healVaule;
      }
      this.attackPlayer();
    },
    restartGame() {
      (this.monsterHealth = 100),
        (this.playerHealth = 100),
        (this.currentRound = 0),
        (this.result = null);
    },
    surrender() {},
  },
}).mount("#game");
