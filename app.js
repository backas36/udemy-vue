const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName(lastname) {
      console.log("fire"); //每一次都會觸發，即使沒有更新，例如 按了 counter add 10 button，畫面看起來是沒變的，但其實每一次都是新的 method
      return this.name ? `${this.name} ${lastname}` : "";
    },
  },
});

app.mount("#events");
