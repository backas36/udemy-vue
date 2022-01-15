const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    reduceCounter() {
      this.counter--;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      console.log(event);
      alert("ee");
    },
    confirmInput() {
      this.confirmName = this.name;
    },
  },
});

app.mount("#events");
