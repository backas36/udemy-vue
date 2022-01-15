Vue.createApp({
  data() {
    return {
      output: "",
      confirmOutputValue: "",
    };
  },
  methods: {
    alertClick() {
      alert("ohmygod");
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    confirmOutput() {
      this.confirmOutputValue = this.output;
    },
  },
}).mount("#assignment");
