const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    reduceCounter() {
      this.counter--;
    },
  },
});

app.mount("#events");
