const assignment = Vue.createApp({
  data() {
    return {
      value: 0,
      result: "",
    };
  },
  watch: {
    result() {
      setTimeout(() => {
        console.log("fire");
        console.log(this.value);
        this.value = 0;
      }, 5000);
    },
  },
  computed: {
    calResult() {
      if (this.vaule < 37) {
        return (this.result = "Not there yet");
      } else {
        return (this.result = "Too much");
      }
    },
  },
  methods: {
    add5() {
      this.value += 5;
    },
    add1() {
      this.value += 1;
    },
  },
});

assignment.mount("#assignment");
