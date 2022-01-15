const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "Ashi",
    };
  },
  methods: {
    reduceCounter() {
      this.counter--;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
