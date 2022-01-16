const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      //fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 20) {
        setTimeout(() => {
          this.counter = 0;
          console.log(this);
        }, 1000);
      }
    },
    //name(value, oldValue) {
    //  //this.fullName = this.name + " " + "Yang";
    //  //參數 value 就是綁定的 property : name
    //  if (value === "") {
    //    this.fullName = "";
    //  } else {
    //    this.fullName = value + " " + this.lastName;
    //  }
    //  console.log(oldValue);
    //},
    //lastName(value) {
    //  if (value === "") {
    //    this.lastName = "";
    //  } else {
    //    this.fullName = this.name + " " + value;
    //  }
    //},
  },
  computed: {
    fullName() {
      console.log("fire fullName");
      return this.name ? `${this.name} ${this.lastName}` : "";
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
  },
});

app.mount("#events");
