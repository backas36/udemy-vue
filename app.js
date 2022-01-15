const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullName() {
      console.log("fire fullName");
      return this.name ? `${this.name} Yang` : "";
    },
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
    outputFullName() {
      console.log("fire outputFullName"); //每一次都會觸發，即使沒有更新，例如 按了 counter add 10 button，畫面看起來是沒變的，但其實每一次都是新的 method
      return this.name ? `${this.name} Yang` : "";
    },
  },
});

app.mount("#events");
