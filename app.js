const assignment = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    calResult() {
      setTimeout(() => {
        console.log("fire");
        console.log(this.value);
        this.value = 0;
      }, 5000);
    },
  },
  computed: {
    calResult() {
      if (this.value < 37) {
        return "Not yet there";
      } else if (this.value === 37) {
        return this.value;
      } else {
        return "too much";
      }
    },
  },
  methods: {
    addNumber(num) {
      this.value += num;
    },
  },
});

assignment.mount("#assignment");
