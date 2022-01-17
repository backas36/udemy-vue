const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      //console.log(this.$refs); //DOM
    },
  },
  // 1)
  beforeCreate() {
    // can makes api
    console.log("1 beforeCreate()");
  },
  created() {
    // 還是沒有畫面唷！
    console.log("2 create()");
  },
  beforeMount() {
    console.log("3 beforeMount()");
  },
  mounted() {
    //這裡開始才有畫面
    console.log("4 mounted()");
  },
  // data changed
  beforeUpdate() {
    console.log("1. beforeUpdate()");
  },
  updated() {
    console.log("2. updated()");
  },
  beforeUnmount() {
    console.log("1. beforeUnmount()");
  },
  unmounted() {
    console.log("2. unmounted()");
  },
});

app.mount("#app");

//test unmount demo
setTimeout(function () {
  app.unmount();
}, 2000);

const app2 = Vue.createApp({
  template: `
    <p>{{ loveMeal }}</p>
  `,
  data() {
    return {
      loveMeal: "Pizza",
    };
  },
});
app2.mount("#app2");
