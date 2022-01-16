const getRandomValue = (max, min) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(10, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
    },
  },
}).mount("#game");
